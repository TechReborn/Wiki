![Industrial Grinder](/media/mods/techreborn/industrial_grinder.png){.align-right width="200" query="?nolink&200"} ======= Industrial Grinder ======= The **Industrial Grinder** is a multi-block machine that allows better grinding of items. It is a medium tier machine with 40000FE internal energy buffer and 256FE input. Also it has internal tank for 16 buckets which store fluid used to grind ore.

## Recipe

\<recipe\> input techreborn:industrial_electrolyzer techreborn:advanced_circuit techreborn:grinder input techreborn:diamond_grinding_head techreborn:diamond_grinding_head techreborn:diamond_grinding_head input techreborn:advanced_circuit techreborn:advanced_machine_block techreborn:advanced_circuit output techreborn:industrial_grinder \</recipe\>\
===== Building instructions ===== The **Industrial Grinder** multi-block has 3 layers. The first layer consists of 9x \<mcitem\>techreborn:standard_machine_casing\</mcitem\> ![industrial_grinder_layer1.png](/gallery>/blocks/industrial_grinder_layer1.png){query="?lightbox"} The second layer consists of 8x \<mcitem\>techreborn:advanced_machine_casing\</mcitem\> will central hole filled with water. ![industrial_grinder_layer2.png](/gallery>/blocks/industrial_grinder_layer2.png){query="?lightbox"} The third layer again contains 9x \<mcitem\>techreborn:standard_machine_casing\</mcitem\> ![industrial_grinder_layer3.png](/gallery>/blocks/industrial_grinder_layer3.png){query="?lightbox"} Attach the **Industrial Grinder** to the middle layer centre and connect it to a power source. ![industrial_grinder.png](/gallery>/blocks/industrial_grinder.png){query="?lightbox"}\
==== Machine GUI ==== **Industrial Grinder** has the following elements on machine GUI: \<WRAP group\> \<WRAP half column\> ![columns](/blocks/guiindustrialgrinder.png){query="?nolink"} \</WRAP\> \<WRAP half column\>

1.  Four slots for upgrades
2.  Energy indicator. Click on it to switch energy display between EU and FE
3.  Input slot for cells. Put here filled cell with proper fluid to drain this cell into internal tank or empty cell to drain fluid out of tank. **Industrial Grinder** will try to drain cell two times per second.
4.  Output slot for cell. **Industrial Grinder** will put here drained cells.
5.  Internal tank. Tooltip will provide more info about amount and type of stored fluid
6.  Input slot for ore
7.  Four output slots to output results of grinding
8.  Hologram button
9.  JEI button to show **Industrial Grinder** recipes in JEI

\</WRAP\> \</WRAP\>

## Usage

\<mcitem\>minecraft:ancient_debris\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> 3x\<mcitem\>minecraft:netherite_scrap\</mcitem\> + 3x\<mcitem\>minecraft:gold_nugget\</mcitem\>\
8x\<mcitem\>minecraft:netherrack\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> 8x\<mcitem\>techreborn:netherrack_dust\</mcitem\> + \<mcitem\>minecraft:gold_nugget\</mcitem\>\
\<mcitem\>minecraft:iron_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\>-\> 2x\<mcitem\>techreborn:iron_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_tin_dust\</mcitem\> + \<mcitem\>techreborn:nickel_dust\</mcitem\>\
\<mcitem\>techreborn:sheldonite_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\>-\> 2x\<mcitem\>techreborn:platinum_dust\</mcitem\> + \<mcitem\>techreborn:nickel_dust\</mcitem\> + 2x\<mcitem\>techreborn:iridium_nugget\</mcitem\>\
\<mcitem\>techreborn:sheldonite_ore\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\>-\> 3x\<mcitem\>techreborn:platinum_dust\</mcitem\> + \<mcitem\>techreborn:nickel_dust\</mcitem\> + 2x\<mcitem\>techreborn:iridium_nugget\</mcitem\>\
\<mcitem\>techreborn:tungsten_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\>-\> 2x\<mcitem\>techreborn:tungsten_dust\</mcitem\> + 3x\<mcitem\>techreborn:small_pile_of_iron_dust\</mcitem\> + 3x\<mcitem\>techreborn:small_pile_of_manganese_dust\</mcitem\>\
\<mcitem\>techreborn:iridium_ore\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\>-\> \<mcitem\>techreborn:iridium_ingot\</mcitem\> + \<mcitem\>techreborn:platinum_dust\</mcitem\>\
\<mcitem\>techreborn:copper_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> 2x\<mcitem\>techreborn:copper_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_gold_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_nickel_dust\</mcitem\>\
\<mcitem\>techreborn:copper_ore\</mcitem\> + \<mcitem\>techreborn:sodiumpersulfate_cell\</mcitem\> -\> 3x\<mcitem\>techreborn:copper_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_gold_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_nickel_dust\</mcitem\>\
\<mcitem\>techreborn:copper_ore\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> 3x\<mcitem\>minecraft:raw_copper\</mcitem\> + 3x\<mcitem\>minecraft:gold_nugget\</mcitem\>\
\<mcitem\>techreborn:tin_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> 2x\<mcitem\>techreborn:tin_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_iron_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_zinc_dust\</mcitem\>\
\<mcitem\>techreborn:tin_ore\</mcitem\> + \<mcitem\>techreborn:sodiumpersulfate_cell\</mcitem\> -\> 2x\<mcitem\>techreborn:tin_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_iron_dust\</mcitem\> + \<mcitem\>techreborn:zinc_dust\</mcitem\>\
\<mcitem\>minecraft:gold_ore\</mcitem\> + \<mcitem\>techreborn:sodiumpersulfate_cell\</mcitem\> -\> 2x\<mcitem\>techreborn:gold_dust\</mcitem\> + \<mcitem\>techreborn:copper_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_nickel_dust\</mcitem\>\
\<mcitem\>minecraft:gold_ore\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> 3x\<mcitem\>minecraft:raw_gold\</mcitem\> + 3x\<mcitem\>techreborn:copper_nugget\</mcitem\> + 3x\<mcitem\>techreborn:nickel_nugget\</mcitem\>\
\<mcitem\>techreborn:galena_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> 2x\<mcitem\>techreborn:galena_dust\</mcitem\> + \<mcitem\>techreborn:sulfur_dust\</mcitem\>\
\<mcitem\>techreborn:galena_ore\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> 2x\<mcitem\>techreborn:galena_dust\</mcitem\> + \<mcitem\>techreborn:sulfur_dust\</mcitem\> + \<mcitem\>techreborn:raw_silver\</mcitem\>\
\<mcitem\>techreborn:sphalerite_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> 5x\<mcitem\>techreborn:sphalerite_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_yellow_garnet_dust\</mcitem\> + \<mcitem\>techreborn:zinc_dust\</mcitem\>\
\<mcitem\>techreborn:sphalerite_ore\</mcitem\> + \<mcitem\>techreborn:sodiumpersulfate_cell\</mcitem\> -\> 5x\<mcitem\>techreborn:sphalerite_dust\</mcitem\> + \<mcitem\>techreborn:small_pile_of_yellow_garnet_dust\</mcitem\> + \<mcitem\>techreborn:zinc_dust\</mcitem\>\
\<mcitem\>techreborn:bauxite_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> 2x\<mcitem\>techreborn:bauxite_dust\</mcitem\> + \<mcitem\>techreborn:aluminium_dust\</mcitem\>\
\<mcitem\>techreborn:sodalite_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> 12x\<mcitem\>techreborn:sodalite_dust\</mcitem\> + 3x\<mcitem\>techreborn:aluminium_dust\</mcitem\>\
\<mcitem\>techreborn:pyrite_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> 5x\<mcitem\>techreborn:pyrite_dust\</mcitem\> + 2x\<mcitem\>techreborn:sulfur_dust\</mcitem\>\
\<mcitem\>techreborn:ruby_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> \<mcitem\>techreborn:ruby\</mcitem\> + 6x\<mcitem\>techreborn:small_pile_of_ruby_dust\</mcitem\> + 2x\<mcitem\>techreborn:small_pile_of_red_garnet_dust\</mcitem\>\
\<mcitem\>techreborn:sapphire_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> \<mcitem\>techreborn:sapphire\</mcitem\> + 6x\<mcitem\>techreborn:small_pile_of_sapphire_dust\</mcitem\> + 2x\<mcitem\>techreborn:small_pile_of_peridot\</mcitem\>\
\<mcitem\>minecraft:diamond_ore\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> 2x\<mcitem\>minecraft:diamond\</mcitem\> + 3x\<mcitem\>techreborn:small_pile_of_diamond_dust\</mcitem\>\
\<mcitem\>minecraft:emerald_ore\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> 2x\<mcitem\>minecraft:emerald\</mcitem\> + 3x\<mcitem\>techreborn:small_pile_of_emerald_dust\</mcitem\>\
\<mcitem\>minecraft:lapis_lazuli_ore\</mcitem\> + \<mcitem\>techreborn:water_cell\</mcitem\> -\> 12x\<mcitem\>minecraft:lapis_lazuli\</mcitem\> + 3x\<mcitem\>techreborn:lazurite_dust\</mcitem\>\
\<mcitem\>minecraft:copper_ingot\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> \<mcitem\>minecraft:raw_copper\</mcitem\>\
\<mcitem\>minecraft:gold_ingot\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> \<mcitem\>minecraft:raw_gold\</mcitem\>\
\<mcitem\>minecraft:iron_ingot\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> \<mcitem\>minecraft:raw_iron\</mcitem\>\
\<mcitem\>techreborn:iridium_ingot\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> \<mcitem\>techreborn:raw_iridium\</mcitem\>\
\<mcitem\>techreborn:lead_ingot\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> \<mcitem\>techreborn:raw_lead\</mcitem\>\
\<mcitem\>techreborn:silver_ingot\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> \<mcitem\>techreborn:raw_silver\</mcitem\>\
\<mcitem\>techreborn:tin_ingot\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> \<mcitem\>techreborn:raw_tin\</mcitem\>\
\<mcitem\>techreborn:tungsten_ingot\</mcitem\> + \<mcitem\>techreborn:mercury_cell\</mcitem\> -\> \<mcitem\>techreborn:raw_tungsten\</mcitem\>\
