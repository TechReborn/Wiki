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
		let newSection = "";
		// todo: some are not flattened at this level, we need to fix that probably
		for (const item of Object.values(recipes[category.name])) {
			if (item.hasOwnProperty("type") === false) {
				// this is a sub folder, not an item
				throw new Error("Unhandled subfolder found, get good.");
			}
			// this converted information should be good regardless of destination
			// machine page, item page, etc.
			console.log(`* getting the item content for recipes[${category.name}][${item.id}]`);
			const itemContent = recipes[category.name][item.id];
			const converted = formatter[functionMapper[category.name]](itemContent);
			newSection = `${newSection}\n${converted}`;
		}
		const output = `${original}
		<details>
			<summary>Recipes using ${titleCase(category.name)}</summary>
			${newSection}
		</details>`
		await fs.writeFile(mdxPath, output, "utf8");
	}

	// await fs.writeFile(outputFile, JSON.stringify(recipes, null, 2), "utf8");
	// console.log(`✅  Filtered recipes written to ${outputFile}`);
})();


const ORDER = [
	{name: "alloy_smelter", path: "docs/blocks/machines/alloy_smelter.mdx"},
	{name: "assembling_machine", path: "docs/blocks/machines/assembling_machine.mdx"}
];

const formatter = {
	// for things that consume power and have a time
	electric: (data) => {
		const config = {
			input: data.ingredients.map(({ ingredient, count = 1 }) => ({
				id: filterId(ingredient),
				qty: count,
			})),
			output: data.outputs.map(({ id, count = 1 }) => ({
				id: filterId(id),
				qty: count,
			})),
			tool: data.type,
			meta: {
				power: data.power,
				time: data.time
			}
		};
		return `<Machine config={${JSON.stringify(config, null, 2)}} />`;
	}
}

const filterId = (input) => {
	// first we need to check to see if input is an object
	// after checking by hand, all items who use input as an object as cells, so that's what we'll assume because i'm lazy, even this line, so long.
	// should result in techreborn:lithium_cell
	if (typeof input === "object") {
		input = `${input.components["techreborn:fluid"]}_cell`;
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
	// basically anything 1:1 that is left over, a bit of a f* it bucket if you will
	const specialTerms = {
		"#c:tuff": "minecraft:tuff",
		"#c:basalt": "minecraft:basalt",
		"#c:certus_quartz": "techreborn:certus_quartz",
		"#c:marble": "minecraft:marble",
	}
	if (!!specialTerms[input]) { return specialTerms[input]; }
	// let's catch any unhandled for now
	if (input.includes("#c:") === true) { throw new Error (`Unhandled ID in filterId: ${input}`); }
	// and some random ass arbitrary filtering for inconsistant minecraft ids
	if (input.includes("#minecraft:") === true) {
		input = input.split("#").join("");
	}
	// and some filtering for converting planks and logs to their oak specific versions
	// this is just a small hack to help with image rendering and wiki linking
	// i think our readers are small enough to figure out that it doesn't _need_ to be oak
	if (input.includes("minecraft:planks") === true || input.includes("minecraft:logs") === true) {
		const inputParts = input.split(":");
		input = `${inputParts[0]}:oak_${inputParts[1]}`;
	}
	// if it didn't match it's...fine?
	return input;
}

const functionMapper = {
	alloy_smelter: "electric",
	assembling_machine: "electric",
	blasting: "type",
	centrifuge: "type",
	chemical_reactor: "type",
	compressor: "type",
	crafting_table: "type",
	diesel_generator: "type",
	distillation_tower: "type",
	extractor: "type",
	fluid_replicator: "type",
	fusion_reactor: "type",
	gas_generator: "type",
	grinder: "type",
	implosion_compressor: "type",
	industrial_blast_furnace: "type",
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