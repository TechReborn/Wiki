import React from 'react';
import McItem from '@site/src/components/McItem';

// recipe is the legacy recipe, config is the config generation parameter passing method
/* Config Parameter Format:
	id: string? (optional) auto assumed by first output item
	input: array
		item: object
			id: string
			qty?: mixed (optional)
	output: array
		item: object
			id: string
			qty?: mixed (optional)
	tool: string,
	meta?: object (optional)
		time?: number (optional) expressed in ticks
		power?: number (optional) expressed in ?
		heat?: number (optional) just heat.
*/
export default function Machine({recipe, config = null}) {
	if (!config) {
		// didn't pass config, convert recipe to config
		config = convertRecipeToConfig(recipe);
	}

	const styles = mapToolToStyles(config.tool);
	return (
		<span class="machine-span">
			<McItem slug={config.tool}/><span> - {titleCase(!!config.id ? config.id : config.output[0].id)}</span>
			<div class="crafting">
			<div class="board" style={styles.input}>
				{config.input.map((item, idx) => (
					<div className="slot" key={idx} data-quantity={item.qty}>
						<McItem
							slug={item.id}
							size="48"
							overrides={{ description: false }}
						/>
					</div>
				))}
			</div>

			<div class="arrow"></div>

			<div class="board" style={styles.output}>
				{config.output.map((item, idx) => (
					<div className="slot" key={idx} data-quantity={item.qty}>
						<McItem
							slug={item.id}
							size="48"
							overrides={{ description: false }}
						/>
					</div>
				))}
			</div>
		</div>

		<div className="crafting-info">
			{config.meta?.time != null && (
				<div className="info-item">
					<span aria-label="Time">⏱</span>
					<span>{(config.meta.time * 0.05)}s</span>
				</div>
			)}
			{config.meta?.power != null && (
			<div className="info-item">
				<span aria-label="Power">⚡</span>
				<span>{config.meta.power * config.meta.time}E</span>
			</div>
			)}
			{config.meta?.heat != null && (
			<div className="info-item">
				<span aria-label="Heat">🔥</span>
				<span>{config.meta.heat}</span>
			</div>
			)}
		</div>
		</span>
		
	);
}

function mapToolToStyles(tool) {
	tool = tool.toLowerCase();
	const FURNACE_LIKE = {input: { '--cols': '1', '--rows': '1' }, output: { '--cols': '1', '--rows': '1' }};
	const CRAFTING_LIKE = {input: { '--cols': '3', '--rows': '3' }, output: { '--cols': '1', '--rows': '1' }};
	const TWOWIDE_ONETALL = {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '2', '--rows': '1' }};
	const options = {
		"minecraft:crafting_table": CRAFTING_LIKE,
		"techreborn:rolling_machine": CRAFTING_LIKE,
		"minecraft:furnace": FURNACE_LIKE,
		"techreborn:iron_furnace": FURNACE_LIKE,
		"techreborn:industrial_blast_furnace": TWOWIDE_ONETALL,
		"techreborn:electric_furnace": FURNACE_LIKE,
		"techreborn:compressor": FURNACE_LIKE,
		"techreborn:grinder": FURNACE_LIKE,
		"techreborn:wire_mill": FURNACE_LIKE,
		"techreborn:vacuum_freezer": FURNACE_LIKE,
		"techreborn:extractor": FURNACE_LIKE,
		"techreborn:fluid_replicator": FURNACE_LIKE,
		"techreborn:fusion_reactor": TWOWIDE_ONETALL,
		"techreborn:industrial_grinder": TWOWIDE_ONETALL,
		"techreborn:assembling_machine": TWOWIDE_ONETALL,
		"techreborn:saw_mill": {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '2', '--rows': '2' }},
		"techreborn:alloy_smelter": {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '1', '--rows': '1' }},
		"techreborn:industrial_centrifuge": {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '4', '--rows': '1' }},
		"techreborn:distillation_tower": {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '4', '--rows': '1' }},
		"techreborn:chemical_reactor": {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '4', '--rows': '1' }},
		"techreborn:industrial_electrolyzer": {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '4', '--rows': '1' }},
		"techreborn:implosion_compressor": TWOWIDE_ONETALL,
		"techreborn:solid_canning_machine": {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '1', '--rows': '1' }},
		"techreborn:fusion_control_computer": {input: { '--cols': '2', '--rows': '1' }, output: { '--cols': '1', '--rows': '1' }}
	};
	const styles = options[tool];
	// todo: maybe something better than this
	if (!styles) { return options["minecraft:crafting_table"]; }
	return styles;
}

function convertRecipeToConfig(recipe) {
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

const titleCase = (s) =>
	s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())
	 .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());