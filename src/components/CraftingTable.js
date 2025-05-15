import React from 'react';
import McItem from '@site/src/components/McItem';

export default function CraftingTable({recipe}) {
	/*
	largely the previous wiki used the following format for recipes, it's my intent to copy the input
	almost exactly so that migration will be easier. we'll see how that goes
	- they appear to use "air" as a placeholder for nothing

	<recipe\> input techreborn:advanced_circuit techreborn:cupronickel_heating_coil techreborn:advanced_circuit input techreborn:cupronickel_heating_coil techreborn:advanced_machine_block techreborn:cupronickel_heating_coil input techreborn:electric_furnace techreborn:cupronickel_heating_coil techreborn:electric_furnace output techreborn:blast_furnace \</recipe\>

	<recipe\> 
	input 
	techreborn:advanced_circuit 
	techreborn:cupronickel_heating_coil 
	techreborn:advanced_circuit 
	input 
	techreborn:cupronickel_heating_coil
	techreborn:advanced_machine_block
	techreborn:cupronickel_heating_coil
	input 
	techreborn:electric_furnace 
	techreborn:cupronickel_heating_coil 
	techreborn:electric_furnace 
	output 
	techreborn:blast_furnace 
	</recipe\>
	*/
	const recipeParts = recipe.trim().split(' ');
	// expressed as 0-8, left to right, top to bottom
	const finalInput = [];
	let finalOutput = null;
	let finalQty = '';
	// marking the next item will be output
	let finalItem = false;
	for (const part of recipeParts) {
		// used to indicate rows, we don't really care
		if (part === 'input') { continue; }
		if (part === 'output') { finalItem = true; continue; }
		if (finalItem === true) {
			// split into id and qty
			const outputParts = part.split(',');
			const outputNameParts = outputParts[0].split(':');
			finalOutput = {
				pack: outputNameParts[0],
				id: outputNameParts[1]
			};
			finalQty = !!outputParts[1] ? outputParts[1] + 'x' : '';
			break;
		}
		// everything else is input...probably (except air)
		if (part === 'air') {
			finalInput.push({
				pack: "minecraft",
				id: "air"
			});
		} else {
			const inputParts = part.split(':');
			finalInput.push({
				pack:inputParts[0],
				id: inputParts[1]
			});
		}
	}

	return (
		<div>
			<h3>Crafting Table</h3>
			<div class="crafting-container">
				<div class="grid">
					<div class="slot"><div class="item"><McItem slug={finalInput[0].id} pack={finalInput[0].pack} size="64" overrides={{ description: false }}/> </div></div>
					<div class="slot"><div class="item"><McItem slug={finalInput[1].id} pack={finalInput[1].pack} size="64" overrides={{ description: false }}/> </div></div>
					<div class="slot"><div class="item"><McItem slug={finalInput[2].id} pack={finalInput[2].pack} size="64" overrides={{ description: false }}/> </div></div>
					<div class="slot"><div class="item"><McItem slug={finalInput[3].id} pack={finalInput[3].pack} size="64" overrides={{ description: false }}/> </div></div>
					<div class="slot"><div class="item"><McItem slug={finalInput[4].id} pack={finalInput[4].pack} size="64" overrides={{ description: false }}/> </div></div>
					<div class="slot"><div class="item"><McItem slug={finalInput[5].id} pack={finalInput[5].pack} size="64" overrides={{ description: false }}/> </div></div>
					<div class="slot"><div class="item"><McItem slug={finalInput[6].id} pack={finalInput[6].pack} size="64" overrides={{ description: false }}/> </div></div>
					<div class="slot"><div class="item"><McItem slug={finalInput[7].id} pack={finalInput[7].pack} size="64" overrides={{ description: false }}/> </div></div>
					<div class="slot"><div class="item"><McItem slug={finalInput[8].id} pack={finalInput[8].pack} size="64" overrides={{ description: false }}/> </div></div>
				</div>

				<div class="arrow"><img src="/img/crafting_arrow.jpg" width="32" /></div>

				<div class="output-slot">
					<div class="item"><McItem slug={finalOutput.id} pack={finalOutput.pack} size="64" overrides={{ description: false }}/></div>{finalQty}
				</div>
			</div>
		</div>
	);
}

