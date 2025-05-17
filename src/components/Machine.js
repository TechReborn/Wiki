import React from 'react';
import McItem from '@site/src/components/McItem';

// recipe is the legacy recipe, next is the next generation parameter passing method
/* Next Parameter Format:
	input: array
		item: object
			slug: string
			qty: mixed
	output: array
		item: object
			slug: string
			qty: mixed
	tool: string
*/
export default function Machine({recipe, next = null}) {

	// expressed as 0-8, left to right, top to bottom
	if (!next) {
		// didn't pass next, convert recipe to next
		next = convertRecipeToNext(recipe);
	}

	const styles = mapToolToStyles(next.tool);
	console.log(next)
	return (
		<span>
			<McItem slug={next.tool} />
			<div class="crafting">
			<div class="board" style={styles.input}>
				{next.input.map((item, idx) => (
					<div className="slot" key={idx} data-quantity={item.qty}>
						<McItem
							slug={item.id}
							size="64"
							overrides={{ description: false }}
						/>
					</div>
				))}
			</div>

			<div class="arrow"></div>

			<div class="board" style={styles.output}>
				{next.output.map((item, idx) => (
					<div className="slot" key={idx} data-quantity={item.qty}>
						<McItem
							slug={item.id}
							size="64"
							overrides={{ description: false }}
						/>
					</div>
				))}
			</div>
		</div>
		</span>
		
	);
}

function mapToolToStyles(tool) {
	const FURNACE_LIKE = {input: { '--cols': '1', '--rows': '1' }, output: { '--cols': '1', '--rows': '1' }};
	const CRAFTING_LIKE = {input: { '--cols': '3', '--rows': '3' }, output: { '--cols': '1', '--rows': '1' }};
	const options = {
		"minecraft:crafting_table": CRAFTING_LIKE,
		"minecraft:furnace": FURNACE_LIKE,
		"techreborn:iron_furnace": FURNACE_LIKE,
		"techreborn:blast_furnace": FURNACE_LIKE,
		"techreborn:compressor": FURNACE_LIKE,
		"techreborn:grinder": FURNACE_LIKE,
	};
	const styles = options[tool];
	// todo: maybe something better than this
	if (!styles) { return options["minecraft:crafting_table"]; }
	return styles;
}

function convertRecipeToNext(recipe) {
	const input = [];
	const output = [];

	let finalItem = false;
	let toolStation = false;
	let finalTool = null;

	const recipeParts = recipe.trim().split(' ');
	for (const part of recipeParts) {
		// used to indicate rows, we don't really care
		if (part === 'input') { continue; }
		if (part === 'output') { finalItem = true; continue; }
		if (finalItem === true) {
			// split into id and qty
			const outputParts = part.split(',');
			output.push({
				id: outputParts[0],
				qty: !!outputParts[1] ? outputParts[1] : 1
			});
			finalItem = false;
			continue;
		}
		if (part === 'tool') { toolStation = true; continue; }
		if (toolStation === true){
			finalTool = part;
			break;
		}
		// everything else is input...probably (except air)
		if (part === 'air') {
			input.push({
				id: "minecraft:air",
				qty: 1
			});
		} else {
			const inputParts = part.split(',');
			input.push({
				id: inputParts[0],
				qty: !!inputParts[1] ? inputParts[1] : 1
			});
		}
	}
	// todo: maybe replace this and not assume a default, fine for now though
	if (finalTool === null){
		finalTool = 'minecraft:crafting_table';
	}
	return {
		input,
		output,
		tool: finalTool
	};
}