---
title: Getting Started
---

This is a very basic guide on getting started with [**Tech Reborn**](https://www.curseforge.com/minecraft/mc-mods/techreborn).

## Acquiring Rubber

To get started with [**Tech Reborn**](https://www.curseforge.com/minecraft/mc-mods/techreborn) you want to craft yourself a <McItem slug="techreborn:treetap" />. Once you have acquired one you can begin to look for a [**Rubber Tree**](/docs/world/rubber_tree)

They are distinctive as they have a spike of leaves at the top. They usually spawn in clumps. This is an example of what the rubber trees will look like in the world.

![Rubber Tree](/img/rubbertree.png)

Once you have found a tree, you need to look for <McItem slug="techreborn:sap" /> spots on it. <McItem slug="techreborn:sap" /> will regenerate over time. When you have found a <McItem slug="techreborn:sap" /> spot you will want to use your _Use Item_ button (typically **right click**) on it with the <McItem slug="techreborn:treetap" />. This will extract the <McItem slug="techreborn:sap" /> and place it in your inventory. Sap can be smelted into <McItem slug="techreborn:rubber" />, which is used to produce **[Insulated Cables]**(/docs/blocks/cables).

## Refining Iron

Smelting an <McItem slug="minecraft:iron_ingot" /> in any furnace will give you a <McItem slug="techreborn:refined_iron_ingot" />, which are used in many of the recipes for machines and their component parts. You'll need a few of these to create your first parts and first machines.

## First Machines

<McItem slug="techreborn:generator" /> As a starting point you will want to make a generator of some kind. This can be from another mod, or you can make a TechReborn <McItem slug="techreborn:generator" />. The generator uses a solid fuel type to generate a small amount of power. You will also need to craft some cables to transfer the power between blocks.

Please note that if you're using generators from other mods then this can affect balance in gameplay. Some generators might use other energy types which may be over or under powered.

The first machines you might want to look into building are the <McItem slug="techreborn:electric_furnace" /> and the <McItem slug="techreborn:grinder" />. If you place these next to the <McItem slug="techreborn:generator" /> you won't even have to worry about power distribution at first because the <McItem slug="techreborn:generator" /> automatically powers blocks which are directly next to it.

The <McItem slug="techreborn:electric_furnace" /> will allow you to smelt much more items using the same amount of resources. For example: 1 piece of coal will smelt 8 iron ore blocks in a regular furnace, 10 iron ore blocks in an iron furnace and 49 iron ore blocks in an <McItem slug="techreborn:electric_furnace" /> powered by a <McItem slug="techreborn:generator" />.

The <McItem slug="techreborn:grinder" /> allows you to grind ores into <McItem slug="techreborn:copper_dust" />, which you can then smelt back into <McItem slug="techreborn:copper_ingot" />. One ore block creates two dusts, each of which can be smelted back into an ingot - this effectively doubles the number of ingots you can acquire from each ore.

## Further Advancement

Now you should have some idea how the main process loop works. Your next goal should be <McItem slug="techreborn:industrial_grinder" />, a better version of the <McItem slug="techreborn:grinder" /> to make even more resources from the ore. But before we can make it, we need first make some new machines to create required parts. Check the **Industrial Grinder** page fo the recipe.

As you can see this mechine is a bit more complicated than those we build before and requires processed materials. One of them is <McItem slug="techreborn:diamond_grinding_head" />
which requires <McItem slug="techreborn:steel_ingot" />, but to obtain that you first need to make <McItem slug="techreborn:industrial_blast_furnace" />.

To make this furnance you will need <McItem slug="techreborn:cupronickel_heating_coil" /> which is made in <McItem slug="techreborn:rolling_machine" />
You will need some nickel to make heating coil. One of the easiest (but slowly) ways is to put copper ore in <McItem slug=" techreborn:industrial_centrifuge" />
You will also need to make plates from verious of materials, because of that you need <McItem slug="techreborn:compressor" />.

## Usefull tips

    - Remember to use tool with `Silk Touch` on the ore. All mod recipes requires 'raw' blocks of ore. You get 'pickaxe' with silk touch on the Rockcutter tool.
    - Once you got <McItem slug="techreborn:assembly_machine" /> you can save some materials making circuits. Check recipes.
    - Consider waiting for industrial grinder before converting whole stacks of materials in lower tier machines. Use mercury or sodium persulfate instead of water for better output. As always: check recipes!
    - The are some cheep and unlimited resources to generate power. Trees for basic generator, food converted to methan or plantballs, lava in thermal generator. You can generate lava using simple cauldron and stalagmite trick.
    - Create redstone generator farms to get easy materials for recycler. Quantity matters, not the item. You can use bamboo or sugar farm to get a lot of stacks. If you are using cobblestone, convert it on the stonecutter to slabs to double it. If you use trees, make sticks. You can combine simple cobble generator with low tier solar panel and block breaker to make free unlimited recycler input.
    - If you need more empty cells consider **Basic Tank Unit** or just dig a hole and put fluid in the ground just like a water or lava. Be carefull to not put multiple fluids in one block.

## Advanced Automation

All of the machines can be configured to accept or output items to any side. This can be done by clicking on the "Configure slots" button in the gui of any machine. When this button is clicked all the slots that can be configured will be displayed in red. When you click on the slot you wish to configure you will be greeted with a popup GUI that allows you to change a wide range of things for that slot.

I have made a [YouTube video](https://www.youtube.com/watch?v=ZPFeYfYnbZ8) going over the basics of the system.

This system should allow you to do some complex automation with pipes from other mods and hoppers from vanilla.

The system also have auto input and output, when enabled the machine will try and move the items around to neighbouring inventories.

Input slots have a setting to filter the input, this setting means that the slot will only accept items that have a valid recipe. This is really useful as it allows you to use one chest for input and output in some cases.

`This page is still being written, more content will come soon.`
