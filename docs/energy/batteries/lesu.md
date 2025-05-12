![LESU](/media/mods/techreborn/lesu.png){.align-right width="200" query="?nolink&200"}

# Lapotronic Energy Storage Unit

The **Lapotronic Energy Storage Unit**---*aka **LESU***---is a battery multi-block that stores energy and charges items. For more details and how to use, read [general information about Batteries](/energy/batteries).

  Tier   Input           Output                  Storage
  ------ --------------- ----------------------- ---------------
  Low    32-512 E/t^1^   64 + (x \* 64) E/t^2^   4 + (x) ME^2^

^1^ //32 E/t base input. If \>= 32 attached, increased to 128 E\\t; If \>= 128, increased to 512 E\\t. //\
^2^ //x = number of LESU Storage blocks attached;\\\\eg. 5 Storage Blocks attached would have an output of 384 E/t (64+5\*64) and a storage of 24 ME (4+5\*4) //

## Recipe

\<recipe\> input air techreborn:lv_transformer air input techreborn:advanced_circuit techreborn:lsu_storage techreborn:advanced_circuit input air techreborn:mv_transformer air output techreborn:lapotronic_su \</recipe\>

## Usage

- While not impressive on its own, the LESU can be expanded by connecting ![LESU Storage](/media/mods/techreborn/lsu_storage.png){width="24" query="?nolink&24"}**[LESU Storage](/media/mods/techreborn/lsu_storage)** to form a multi-block battery. Each attached **LESU Storage** will increase energy storage and output rate.
- Input rate has non-linear scaling. If the multi-block has at least 32 LESU Storage blocks connected the input rate will increase to 128 E\\t, and if it has at least 128 LESU Storage blocks connected the input rate will increase to 512 E\\t. Between these numbers it will increase linearly, as the output rate does.
- Limited to 536 attached storage blocks per LESU Controller because the capacity is limited by Java's 32-bit INT value (2,147,483,647E).
