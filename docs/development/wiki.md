# Wiki Guidelines

First of all, thank you for your efforts to make this wiki better. Seriously, with a lot of blocks and items it is near to impossible for developers to keep wiki up-to-date.

See our **[Page Templates](/development/wiki/templates)** for use when creating and editing pages.

### Wiki Structure

In order to have breadcrumbs we have 3 major sections:\
**Energy** - Any item or block that uses power. Including cables, generators, batteries, machines, and powered tools.\
**Items** - Non-power related items. Including cells, dusts, ingots, parts, etc.\
**Blocks** - Non-power related blocks. Including ores, machine frames/casings, storage/tank units, etc.

Each item or block will require two pages:\
1. A redirect page at its *mods:namespace:item_name* location (see below at #Minecraft_Items)\
2. A content page in one of the three sections above

### Syntax

Here are some syntax examples for the two \[P\]lugins that provide extra Minecraft-specific features, and for handy DokuWiki tools:

\<tabs\>

- [\[P\] Minecraft Items](#tab-items)
- [\[P\] Minecraft Recipes](#tab-recipes)
- [Manual Links](#tab-manual_items)
- [Redirects](#tab-redirects)

\<pane id="tab-items"\>

#### Minecraft Items Plugin

**Allows you to insert a fancy link to a block or item**\
Syntax: \<code\> \<mcitem\>namespace:item_name\</mcitem\> \</code\> `namespace` is either `techreborn` or `minecraft` for vanilla items\
`item_name` is the registry name for an item

Example:

    <mcitem>minecraft:iron_ore</mcitem>
    <mcitem>techreborn:copper_ore</mcitem>

Produces: \<mcitem\>minecraft:iron_ore\</mcitem\> \<mcitem\>techreborn:copper_ore\</mcitem\>

\<callout type="info" icon="true"\> If this produces something that is grammatically incorrect *(maybe you need plural or want "Cell" to refer to the "Empty Cell" page, etc)* see the **Manual Links** tab for custom names. \</callout\>

This will automatically generate a link to the page `mods:namespace:item_name`. That page requires a redirect to the page with real content following wiki structure.\
\<callout type="warning" icon="true"\> **There should be no content besides redirects under the `mods:` namespace.** For an example page, see **[templates](/development/wiki/templates)**. \</callout\> \</pane\>

\<pane id="tab-recipes"\>

#### Minecraft Recipe Plugin

Allows for pretty formatted recipes.

    <recipe>
    size 3x3
    input air air air
    input air minecraft:coal air
    input air minecraft:stick air
    output minecraft:torch,4
    tool minecraft:crafting_table
    </recipe>

\<recipe\> size 3x3 input air air air input air minecraft:coal air input air minecraft:stick air output minecraft:torch,4 tool minecraft:crafting_table \</recipe\>\

##### Attributes

  Attribute   Default Value                          Allowed Values                     Description
  ----------- -------------------------------------- ---------------------------------- -----------------------------------------------
  `size`      Optional; `3x3`                        Any positive integers.             Size of the crafting grid in width by height.
  `input`     Optional; `air`                        Images from the :mods namespace.   Fills in the crafting grid with items. Use `input` for each row of items on the crafting table you wish to define.
  `output`    Optional; `air`                        Images from the :mods namespace.   Fills in the output section of the crafting grid with an icon.
  `tool`      Optional; `minecraft:crafting_table`   Images from the :mods namespace.   Replaces the icon of the Crafting Table with another block or tool.

\<callout type="info"\>

#### Specifying Quantities

Both commands `input` and `output` take item stacks as arguments in the form:

    wiki_page,amount

    minecraft:torch,4
    minecraft:cobblestone,1

`wiki_page` is prefixed with :mods: and therefore resolves the detail page and when suffixed again with .png the image of a block.

`amount` defines the quantity of an item that is used in the recipe. If omitted, exactly one is assumed. Only amounts larger than one are indicated with numbers.

Note that tool also takes an item stack as an argument, but it will ignore any amounts. \</callout\>

#### Additional Examples

    <recipe>
    input air minecraft:stick air
    input minecraft:wood_planks minecraft:wood_planks minecraft:wood_planks
    input minecraft:wood_planks air air
    output techreborn:treetap
    </recipe>

\<recipe\> input air minecraft:stick air input minecraft:wood_planks minecraft:wood_planks minecraft:wood_planks input minecraft:wood_planks air air output techreborn:treetap \</recipe\>

\
Example furnace recipe (note: size and tool are optional):

    <recipe>
    size 1x1
    input minecraft:cobblestone
    output minecraft:stone
    tool minecraft:furnace
    </recipe>

Produces: \<recipe\> size 1x1 input minecraft:cobblestone output minecraft:stone tool minecraft:furnace \</recipe\> \</pane\>

\<pane id="tab-manual_items"\>

#### Manual Links

Images and links can also be specified manually using this format:

    {{:mods:techreborn:compressor.png?nolink&24}}**[[mods:techreborn:compressor|Manual Naming]]** 

\
Which produces: ![compressor.png](/media/mods/techreborn/compressor.png){width="24" query="?nolink&24"}**[Manual Naming](/media/mods/techreborn/Compressor)**

For a plain in-line link to a page you could use:

    [[mods:techreborn:compressor|a plain link]]

Which would produce [a plain link](/media/mods/techreborn/compressor)

\<callout type="info"\> Use links with images wherever it makes sense. You can use an image for non-item pages too, like an Insulated Copper Cable image ![insulated_copper_cable.png](/media/mods/techreborn/insulated_copper_cable.png){width="24" query="?nolink&24"} to go with a link to the **[cables](/energy/cables)** page. \</callout\> \</pane\>

\<pane id="tab-redirects"\>

#### Redirects

\<callout icon="true" type="info"\>To edit a page that already has a redirect simply add `&do=edit` to the end of the URL (eg. <https://wiki.techreborn.ovh/doku.php?id=mods:techreborn:galena_ore&do=edit>)\</callout\> Redirect syntax for items is:

    ~~REDIRECT>namespace:item_name~~

Where `namespace` is likely `items`, `blocks` or `energy`.\
Namespaces can also be nested, like

    ~~REDIRECT>namespace:subnamespace:item_name~~

**Contextual example:**\
On the page `mods:techreborn:grinder` there should be the following redirect:

    ~~REDIRECT>energy:machines:grinder~~

#### Vanilla Redirects

Also works for external links for vanilla items, for example:

    ~~REDIRECT>http://minecraft.gamepedia.com/Iron_Ore~~

\</pane\> \</tabs\>
