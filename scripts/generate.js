// file: build-recipes.mjs
import fs from "fs/promises";
import path from "path";

(async function init() {
	const recipesDir = path.join(process.cwd(), "static", "recipe");
	const outputFile = path.join(process.cwd(), "static", "processed_recipes.json");

	const filter = (data) => {
		// i'm not using this _internal filterable prop, but gosh if it doesn't seem like a cool idea
		const { _internal, ...cleaned } = data;

		return cleaned;
	};

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

				const filtered = filter(json);
				const key = path.basename(entry.name, ".json");
				tree[key] = filtered;
			}
		}

		return tree;
	}

	const recipes = await readRecipes(recipesDir);

	await fs.writeFile(outputFile, JSON.stringify(recipes, null, 2), "utf8");
	console.log(`✅  Filtered recipes written to ${outputFile}`);
})();
