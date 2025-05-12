![Fusion Control Computer](/media/mods/techreborn/fusion_control_computer.png){.align-right width="200" query="?nolink&200"}

# Fusion Control Computer

The **Fusion Control Computer** is part of a multi-block generator that produces energy from various fluids. It is unique in that it does not simply consume the fuel, but instead processes them into a new item. It is also used as a machine to produce \<mcitem\>techreborn:platinum_dust\</mcitem\> and \<mcitem\>techreborn:iridium_ore\</mcitem\>.\
It must be combined with a minimum of 16 \<mcitem\>techreborn:fusion_coil\</mcitem\>s to create a usable fusion reactor.

  Tier     Generation Rate                                                   Input                                                       Output                                                            Storage
  -------- ----------------------------------------------------------------- ----------------------------------------------------------- ----------------------------------------------------------------- --------------------------------
  Insane   \<tooltip title="16,384"\>16.3k\</tooltip\> Energy per Tick[^1]   \<tooltip title="8,192"\>8.1k\</tooltip\> Energy per Tick   \<tooltip title="100,000"\>100k\</tooltip\> Energy per Tick[^2]   100M Energy to 2.1G Energy[^3]

### Recipe

\<recipe\> input techreborn:energy_flow_chip techreborn:energy_flow_chip techreborn:energy_flow_chip input techreborn:energy_crystal techreborn:fusion_coil techreborn:energy_crystal input techreborn:energy_flow_chip techreborn:energy_flow_chip techreborn:energy_flow_chip output techreborn:fusion_control_computer \</recipe\>

### Usage

- It provides an adjustable hologram of the various sizes of multi-block with the H button on the item's menu. Togglable on and off.
- Outputs energy on the top and bottom ***while crafting***.
- Inputs energy on the sides ***while not crafting***.
- Must be charged with energy before using for a power generating recipe; see the *Minimum Energy Required* column in the Fuel/Input section below.

### Fuel/Input

- **Input A** and **Input B** must be in a ![empty_cell.png](/media/mods/techreborn/empty_cell.png){width="24" query="?nolink&24"}**[Cell](/media/mods/techreborn/empty_cell)** and not a \<mcitem\>minecraft:bucket\</mcitem\>. These cells will also be consumed by the machine when the reaction starts.
- **Minimum Energy Required** is energy that must exist in the computer to start the process, and it will be immediately consumed (if available) when the ingredients are placed in their slots. Fortunately the impact of this is reduced as you build larger and larger fusion reactors, as the *Energy Produced* scales up while the energy consumed to start the reactor is always constant.
- **Output** is the resulting item that is created with the fusion of the other two items. If necessary, it will be created within a [Cell](/items/fluid) (this does not have to be provided by the player).
- **Energy Produced** is the amount of energy the reactor will create in the process of making the output resource. This is typically multiplied by the reactor size (see the Power Generation table below).
- **Energy Consumed** is the amount the reactor requires to continue to produce certain items.

  Input A                                               Input B                                             Minimum Energy Required       Output                                                   Energy Produced
  ------------------------------------------------ ---- ---------------------------------------------- ---- ------------------------- --- --------------------------------------------------- ---- -----------------------------------------------------------
  \<mcitem\>techreborn:deuterium_cell\</mcitem\>   \+   \<mcitem\>techreborn:tritium_cell\</mcitem\>   \+   40M Energy                =   \<mcitem\>techreborn:helium3_cell\</mcitem\>        \+   16,364 E/t \* 2048 ticks = 33,554,433 E \* Gen Multiplier
  \<mcitem\>techreborn:deuterium_cell\</mcitem\>   \+   \<mcitem\>techreborn:helium3_cell\</mcitem\>   \+   40M Energy                =   \<mcitem\>techreborn:heliumplasma_cell\</mcitem\>   \+   16,364 E/t \* 2048 ticks = 33,554,433 E \* Gen Multiplier

The following recipes consume power at 2048 E/t.[^4]

  Input A                                                Input B                                               Minimum Energy Required        Energy Consumed                            Output
  ------------------------------------------------- ---- ------------------------------------------------ ---- ------------------------- ---- -------------------------------------- --- -----------------------------------------------
  \<mcitem\>techreborn:wolframium_cell\</mcitem\>   \+   \<mcitem\>techreborn:beryllium_cell\</mcitem\>   \+   80M Energy                \+   2048 E/t \* 1024 ticks = 2,097,152 E   =   \<mcitem\>techreborn:platinum_dust\</mcitem\>
  \<mcitem\>techreborn:wolframium_cell\</mcitem\>   \+   \<mcitem\>techreborn:lithium_cell\</mcitem\>     \+   90M Energy                \+   2048 E/t \* 1024 ticks = 2,097,152 E   =   \<mcitem\>techreborn:iridium_ore\</mcitem\>

\<accordion\> \<panel title="Power Generation Table" icon="fa fa-table"\>

    Size   Fusion Coils Required   Generation Multiplier                   Energy Generated per Tick[^5]                            Total Energy Generated[^6]                                    Max Capacity[^7]   Percent of Capacity[^8]
  ------ ----------------------- ----------------------- ----------------------------------------------- ----------------------------------------------------- --------------------------------------------------- -------------------------
       6                      16                    1.00     \<tooltip title="16,384"\>16.3k\</tooltip\>       \<tooltip title="33,554,432"\>33.5M\</tooltip\>     \<tooltip title="100,000,000"\>100M\</tooltip\>                       34%
       7                      16                    1.74     \<tooltip title="28,508"\>28.5k\</tooltip\>       \<tooltip title="58,384,711"\>58.3M\</tooltip\>     \<tooltip title="174,000,000"\>174M\</tooltip\>                       34%
       8                      24                    3.61     \<tooltip title="59,146"\>59.1k\</tooltip\>     \<tooltip title="121,131,499"\>121.1M\</tooltip\>     \<tooltip title="361,000,000"\>361M\</tooltip\>                       34%
       9                      24                    6.06     \<tooltip title="99,287"\>99.2k\</tooltip\>     \<tooltip title="203,339,857"\>203.3M\</tooltip\>     \<tooltip title="606,000,000"\>606M\</tooltip\>                       34%
      10                      28                    9.06   \<tooltip title="148,439"\>148.4k\</tooltip\>     \<tooltip title="304,003,153"\>304.0M\</tooltip\>     \<tooltip title="906,000,000"\>906M\</tooltip\>                       34%
      11                      36                   12.58   \<tooltip title="206,110"\>206.1k\</tooltip\>     \<tooltip title="422,114,754"\>422.1M\</tooltip\>   \<tooltip title="1,258,000,000"\>1.2G\</tooltip\>                       34%
      12                      40                   16.60   \<tooltip title="271,974"\>271.9k\</tooltip\>     \<tooltip title="557,003,571"\>557.0M\</tooltip\>   \<tooltip title="1,660,000,000"\>1.6G\</tooltip\>                       34%
      13                      48                   21.11   \<tooltip title="345,866"\>345.8k\</tooltip\>     \<tooltip title="708,334,059"\>708.3M\</tooltip\>   \<tooltip title="2,111,000,000"\>2.1G\</tooltip\>                       34%
      14                      64                   26.10   \<tooltip title="427,622"\>427.6k\</tooltip\>     \<tooltip title="875,770,675"\>875.7M\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                       41%
      15                      64                   31.55   \<tooltip title="516,915"\>516.9k\</tooltip\>     \<tooltip title="1,058,642,329"\>1.0G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                       49%
      16                      70                   37.45   \<tooltip title="613,580"\>613.5k\</tooltip\>     \<tooltip title="1,256,613,478"\>1.2G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                       59%
      17                      70                   43.80   \<tooltip title="717,619"\>717.6k\</tooltip\>     \<tooltip title="1,469,684,121"\>1.4G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                       68%
      18                      92                   50.59   \<tooltip title="828,866"\>828.8k\</tooltip\>     \<tooltip title="1,697,518,714"\>1.6G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                       79%
      19                     108                   57.81   \<tooltip title="947,159"\>947.1k\</tooltip\>     \<tooltip title="1,939,781,713"\>1.9G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                       90%
      20                     120                   65.45   \<tooltip title="1,072,332"\>1.0M\</tooltip\>     \<tooltip title="2,196,137,574"\>2.1G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      102%
      21                     232                   73.52   \<tooltip title="1,204,551"\>1.2M\</tooltip\>     \<tooltip title="2,466,921,840"\>2.4G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      115%
      22                     304                   81.99   \<tooltip title="1,343,324"\>1.3M\</tooltip\>     \<tooltip title="2,751,127,879"\>2.7G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      128%
      23                     324                   90.88   \<tooltip title="1,488,977"\>1.4M\</tooltip\>     \<tooltip title="3,049,426,780"\>3.0G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      142%
      24                     388                  100.17   \<tooltip title="1,641,185"\>1.6M\</tooltip\>     \<tooltip title="3,361,147,453"\>3.3G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      157%
      25                     412                  109.86   \<tooltip title="1,799,946"\>1.7M\</tooltip\>     \<tooltip title="3,686,289,899"\>3.6G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      172%
      26                     452                  119.94   \<tooltip title="1,965,096"\>1.9M\</tooltip\>     \<tooltip title="4,024,518,574"\>4.0G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      187%
      27                     508                  130.42   \<tooltip title="2,136,801"\>2.1M\</tooltip\>     \<tooltip title="4,376,169,021"\>4.3G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      204%
      28                     588                  141.28   \<tooltip title="2,314,731"\>2.3M\</tooltip\>     \<tooltip title="4,740,570,152"\>4.7G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      221%
      29                     652                  152.53   \<tooltip title="2,499,051"\>2.4M\</tooltip\>     \<tooltip title="5,118,057,512"\>5.1G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      238%
      30                     708                  164.16   \<tooltip title="2,689,597"\>2.6M\</tooltip\>     \<tooltip title="5,508,295,557"\>5.5G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      257%
      31                     764                  176.17   \<tooltip title="2,886,369"\>2.8M\</tooltip\>     \<tooltip title="5,911,284,285"\>5.9G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      275%
      32                     852                  188.55   \<tooltip title="3,089,203"\>3.0M\</tooltip\>     \<tooltip title="6,326,688,153"\>6.3G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      295%
      33                     868                  201.30   \<tooltip title="3,298,099"\>3.2M\</tooltip\>     \<tooltip title="6,754,507,161"\>6.7G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      315%
      34                     928                  214.43   \<tooltip title="3,513,221"\>3.5M\</tooltip\>     \<tooltip title="7,195,076,853"\>7.1G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      335%
      35                     984                  227.92   \<tooltip title="3,734,241"\>3.7M\</tooltip\>     \<tooltip title="7,647,726,141"\>7.6G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      356%
      36                   1,080                  241.78   \<tooltip title="3,961,323"\>3.9M\</tooltip\>     \<tooltip title="8,112,790,568"\>8.1G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      378%
      37                   1,112                  256.00   \<tooltip title="4,194,304"\>4.1M\</tooltip\>     \<tooltip title="8,589,934,592"\>8.5G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      400%
      38                   1,252                  270.58   \<tooltip title="4,433,182"\>4.4M\</tooltip\>     \<tooltip title="9,079,158,210"\>9.0G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      423%
      39                   1,260                  285.52   \<tooltip title="4,677,959"\>4.6M\</tooltip\>     \<tooltip title="9,580,461,424"\>9.5G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      446%
      40                   1,368                  300.81   \<tooltip title="4,928,471"\>4.9M\</tooltip\>   \<tooltip title="10,093,508,689"\>10.0G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      470%
      41                   1,632                  316.46   \<tooltip title="5,184,880"\>5.1M\</tooltip\>   \<tooltip title="10,618,635,550"\>10.6G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      494%
      42                   1,896                  332.46   \<tooltip title="5,447,024"\>5.4M\</tooltip\>   \<tooltip title="11,155,506,462"\>11.1G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      519%
      43                   2,000                  348.80   \<tooltip title="5,714,739"\>5.7M\</tooltip\>   \<tooltip title="11,703,785,881"\>11.7G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      545%
      44                   2,192                  365.50   \<tooltip title="5,988,352"\>5.9M\</tooltip\>   \<tooltip title="12,264,144,896"\>12.2G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      571%
      45                   2,332                  382.54   \<tooltip title="6,267,535"\>6.2M\</tooltip\>   \<tooltip title="12,835,912,417"\>12.8G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      598%
      46                   2,560                  399.93   \<tooltip title="6,552,453"\>6.5M\</tooltip\>   \<tooltip title="13,419,423,989"\>13.4G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      625%
      47                   2,696                  417.66   \<tooltip title="6,842,941"\>6.8M\</tooltip\>   \<tooltip title="14,014,344,069"\>14.0G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      653%
      48                   2,888                  435.73   \<tooltip title="7,139,000"\>7.1M\</tooltip\>   \<tooltip title="14,620,672,655"\>14.6G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      681%
      49                   2,944                  454.13   \<tooltip title="7,440,465"\>7.4M\</tooltip\>   \<tooltip title="15,238,074,204"\>15.2G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      710%
      50                   3,172                  472.88   \<tooltip title="7,747,665"\>7.7M\</tooltip\>   \<tooltip title="15,867,219,804"\>15.8G\</tooltip\>   \<tooltip title="2,147,483,647"\>2.1G\</tooltip\>                      739%

\</panel\> \</accordion\>

[^1]: Base Generation Rate - can be many multiples of this depending on the size of the reactor; see the **Power Generation** table below.

[^2]: This may be the sign of a bug, since there is no way to output power with cables.

[^3]: Scales with the generation multiplier. Ex. 1.74x = 174M Energy storage. Capped at 2.1G Energy.

[^4]: There is currently a bug in 1.16.5+ where these two recipes actually produce energy instead of consuming it \[after the initial *Minimum Energy Required*\]. This energy however doesn't scale with the multiplier of the system, so it will always be a flat 2,097,152 Energy \[2048 Energy \* 1024 ticks\].

[^5]: Rounded Down

[^6]: Rounded Down

[^7]: Capped at 2,147,483,647 Energy

[^8]: *Total Power Generated* divided by *Max Capacity*, rounded to nearest whole percent
