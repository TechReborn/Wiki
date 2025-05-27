// file: build-recipes.mjs
import fs from "fs/promises";
import path from "path";

(async() => {
	const recipesDir = path.join(process.cwd(), "static", "recipe");
	const outputFile = path.join(process.cwd(), "static", "processed_recipes.json");

	async function readRecipes(dir) {
		const entries = await fs.readdir(dir, { withFileTypes: true });
		const tree = {};

		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);

			if (entry.isDirectory()) {
				const subtree = await readRecipes(fullPath);

				if (Object.keys(subtree).length) {
					tree[entry.name] = subtree;
				}
			} else if (entry.isFile() && path.extname(entry.name) === ".json") {
				const raw = await fs.readFile(fullPath, "utf8");
				let json;

				try {
					json = JSON.parse(raw);
				} catch (err) {
					console.error(`⚠️  Skipping ${fullPath}: invalid JSON`);
					continue;
				}

				const key = path.basename(entry.name, ".json");
				json.id = entry.name.split(".").shift();
				tree[key] = json;
			}
		}

		return tree;
	}

	const recipes = await readRecipes(recipesDir);

	// now that we've read in all recipes, let's process them by category (folder)
	const HEADER = "### Crafting Recipes";
	for (const category of ORDER) {
		// and now by file (a single .json hopefully)
		const mdxPath = path.join(process.cwd(), category.path);
		let original = await fs.readFile(mdxPath, "utf8");
		original = original.split(HEADER).shift() + HEADER;
		let newSections = {};
		// todo: some are not flattened at this level, we need to fix that probably
		for (const item of Object.values(recipes[category.name])) {
			if (item.hasOwnProperty("type") === false) {
				// this is a sub folder, not an item
				throw new Error("Unhandled subfolder found, get good.");
			}
			// this converted information should be good regardless of destination
			// machine page, item page, etc.
			console.log(`* getting the item content for recipes[${category.name}][${item.id}]`);
			// itemContent is the json object of the item directly from the file
			const itemContent = recipes[category.name][item.id];
			// converted will be an object with mdx:markdown and obj:config(recipe) object
			const converted = formatter[functionMapper[category.name]](itemContent);
			// idSection will be our best guess as programatically splitting crafting outputs into groups
			// i suspect this will result in some sorta odd groupings, but it's better than the alternative.
			// basically taking whatever comes before "_from" "blue_wool" for instance, and calling that a group OR using the first output item
			const idSection = (itemContent.id.includes("_from") === true) ? itemContent.id.split("_from").shift() : itemContent.id;
			if (!newSections[idSection]) {
				newSections[idSection] = [];
			}
			newSections[idSection].push({
				config: converted.config,
				mdx: converted.mdx
			});
		}
		let renderedNewSection = "";
		for (const key in newSections) {
			if (newSections[key].length === 1) {
				// no collapsable
				renderedNewSection += newSections[key][0].mdx + "\n";
			} else {
				renderedNewSection += `<details>
				<summary><McItem slug="${getPackFromId(key, newSections[key][0].config)}" /></summary>
				${newSections[key].map(obj => obj.mdx).join("\n")}
				</details>\n`;
			}
			
		}
		const output = `${original}
		<details>
			<summary>Recipes using ${titleCase(category.name)}</summary>
			${renderedNewSection}
		</details>`
		await fs.writeFile(mdxPath, output, "utf8");
	}

	// await fs.writeFile(outputFile, JSON.stringify(recipes, null, 2), "utf8");
	// console.log(`✅  Filtered recipes written to ${outputFile}`);
})();


const ORDER = [
	{name: "alloy_smelter", path: "docs/blocks/machines/alloy_smelter.mdx"},
	{name: "assembling_machine", path: "docs/blocks/machines/assembling_machine.mdx"},
	{name: "chemical_reactor", path: "docs/blocks/machines/chemical_reactor.mdx"},
	{name: "compressor", path: "docs/blocks/machines/compressor.mdx"},
	{name: "distillation_tower", path: "docs/blocks/machines/distillation_tower.mdx"},
	{name: "industrial_centrifuge", path: "docs/blocks/machines/industrial_centrifuge.mdx"}
];

const formatter = {
	// for things that consume power and have a time
	electric: (data) => {
		const config = {
			id: data.id,
			input: data.ingredients.map((obj) => ({
				id: filterId(obj.ingredient),
				qty: !!obj.count ? obj.count : 1,
			})),
			output: data.outputs.map((obj) => ({
				id: filterId(obj.id, obj),
				qty: !!obj.count ? obj.count : 1,
			})),
			tool: data.type,
			meta: {
				power: data.power,
				time: data.time
			}
		};
		return {
			mdx: `<Machine config={${JSON.stringify(config, null, 2)}} />`,
			config
		};
	},
	// for things that consume power and have a time, but omit all methane crafting recipes
	industrial_centrifuge: (data) => {
		const config = {
			id: data.id,
			input: data.ingredients.map((obj) => ({
				id: filterId(obj.ingredient),
				qty: !!obj.count ? obj.count : 1,
			})),
			output: data.outputs.map((obj) => ({
				id: filterId(obj.id, obj),
				qty: !!obj.count ? obj.count : 1,
			})),
			tool: data.type,
			meta: {
				power: data.power,
				time: data.time
			}
		};
		if (config.output.length === 1 && config.output[0].id == "techreborn:methane_cell") {
			return {
				mdx: "",
				config
			};
		}
		return {
			mdx: `<Machine config={${JSON.stringify(config, null, 2)}} />`,
			config
		};
	}
}

const filterId = (input, full = null) => {
	// first we need to check to see if input is an object
	// after checking by hand, all items who use input as an object as cells, so that's what we'll assume because i'm lazy, even this line, so long.
	// should result in techreborn:lithium_cell
	if (typeof input === "object") {
		input = `${input.components["techreborn:fluid"]}_cell`;
		// oh but wait, sometimes that doesn't work
		if (input.includes("minecraft:")) { input = input.split("minecraft:").join("techreborn:"); }
	}
	// these are called suffix terms because the way of correcting them is by
	// adding the type of thing they are to the end of the input term, eg. 
	// #c:ores/silver -> silver_ore
	const suffixTerms = ["#c:ingots/", "#c:plates/", "#c:dusts/", "#c:ores/", "#c:storage_blocks/"]
	const newSuffixTerms = ["ingot", "plate", "dust", "ore", "storage_block"];
	for (const [index, term] of suffixTerms.entries()) {
		if (input.includes(term) === true) {
			input = `techreborn:${input.split(term).pop()}_${newSuffixTerms[index]}`;
			return input;
		}
	}
	// these are prefix terms for the same reason as above, but ya know
	// a prefix instead of a suffix, eg.
	// #c:raw_materials/lead -> raw_lead
	const prefixTerms = ["#c:raw_materials/"];
	const newPrefixTerms = ["raw"];
	for (const [index, term] of prefixTerms.entries()) {
		if (input.includes(term) === true) {
			input = `techreborn:${newPrefixTerms[index]}_${input.split(term).pop()}`;
			return input;
		}
	}
	// these are remove terms because once we strip the noise they are good
	// #c:foods/lead -> raw_lead
	const removeTerms = ["#c:foods/", "#c:gems/"];
	for (const [index, term] of removeTerms.entries()) {
		if (input.includes(term) === true) {
			input = `techreborn:${input.split(term).pop()}`;
			return input;
		}
	}
	// these are small pile terms because that's all they apply to
	// it's just tricky and i don't wanna be fancy, sometimes repeating yourself is ok
	// loving yourself is the important part. :)
	// #c:small_dusts/calcite -> small_pile_of_calcite_dust
	const pileTerms = ["#c:small_dusts/"];
	for (const [index, term] of pileTerms.entries()) {
		if (input.includes(term) === true) {
			input = `techreborn:small_pile_of_${input.split(term).pop()}_dust`;
			return input;
		}
	}
	// and some random ass arbitrary filtering for inconsistant minecraft ids
	if (input.includes("#minecraft:") === true || input.includes("#techreborn:") === true) {
		input = input.split("#").join("");
	}
	// and some filtering for converting planks and logs to their oak specific versions
	// this is just a small hack to help with image rendering and wiki linking
	// i think our readers are small enough to figure out that it doesn't _need_ to be oak
	if (input.includes("minecraft:planks") === true || input.includes("minecraft:logs") === true) {
		const inputParts = input.split(":");
		input = `${inputParts[0]}:oak_${inputParts[1]}`;
	}
	// some filtering for outputs that output a cell, but don't include the fluid
	if (input === "techreborn:cell" && !!full.components?.["techreborn:fluid"]) {
		input = `${full.components["techreborn:fluid"]}_cell`;
	}
	// basically anything 1:1 that is left over, a bit of a f* it bucket if you will
	// including all the vanilla minecraft blocks here, some will need more changes and looping will be more trouble than it's worth
	const specialTerms = {
		"#c:tuff": "minecraft:tuff",
		"#c:basalt": "minecraft:basalt",
		"#c:certus_quartz": "techreborn:certus_quartz",
		"#c:marble": "minecraft:marble",
		"minecraft:slime_ball": "minecraft:slimeball",
		"minecraft:water_cell": "techreborn:water_cell",
		"minecraft:lapis_block": "minecraft:block_of_lapis_lazuli",
		"minecraft:gold_block": "minecraft:block_of_gold",
		"minecraft:iron_block": "minecraft:block_of_iron",
		"minecraft:diamond_block": "minecraft:block_of_diamond",
		"minecraft:emerald_block": "minecraft:block_of_emerald",
		"minecraft:netherite_block": "minecraft:block_of_netherite",
		"minecraft:coal_block": "minecraft:block_of_coal",
		"minecraft:raw_iron_block": "minecraft:block_of_raw_iron",
		"minecraft:raw_gold_block": "minecraft:block_of_raw_gold",
		"minecraft:raw_copper_block": "minecraft:block_of_raw_copper",
		"minecraft:copper_block": "minecraft:block_of_copper",
		"minecraft:amethyst_block": "minecraft:block_of_amethyst",
		"minecraft:redstone_block": "minecraft:block_of_redstone",
		"minecraft:prismarine": "minecraft:prismarine_shard"
	};
	if (!!specialTerms[input]) { return specialTerms[input]; }
	// let's catch any unhandled for now
	if (input.includes("#c:") === true) { throw new Error (`Unhandled ID in filterId: ${input}`); }
	// if it didn't match it's...fine?
	return input;
}

const functionMapper = {
	alloy_smelter: "electric",
	assembling_machine: "electric",
	blasting: "type",
	chemical_reactor: "electric",
	compressor: "electric",
	crafting_table: "type",
	diesel_generator: "type",
	distillation_tower: "electric",
	extractor: "type",
	fluid_replicator: "type",
	fusion_reactor: "type",
	gas_generator: "type",
	grinder: "type",
	implosion_compressor: "type",
	industrial_blast_furnace: "type",
	industrial_centrifuge: "industrial_centrifuge",
	industrial_electrolyzer: "type",
	industrial_grinder: "type",
	industrial_sawmill: "type",
	plasma_generator: "type",
	recycler: "type",
	rolling_machine: "type",
	scrapbox: "type",
	semi_fluid_generator: "type",
	smelting: "type",
	solid_canning_machine: "type",
	thermal_generator: "type",
	vacuum_freezer: "type",
	wire_mill: "type"
};

const titleCase = (s) =>
	s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())
	 .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());


function getPackFromId(id, config) {
	for (const item of config.output) {
		if (item.id.includes(id) === true) { return item.id; }
	}
	return "minecraft:missing_asset";
}