# Supply Module

The supply module primarily serves to ensure the necessary power supply for the individual modules. It does not have bus communication and therefore does not assume any higher-level functionality.

I chose the three voltages 5V, 12V, and 24V because this allows me to cover a wide range. For a compelling reason, an additional power supply must be added, which will be housed in a separate module.

MeanWell power supplies offer a good solution. They are very stable and also mechanically easy to install.

- 5V/10A: LRS-50-5
- 12V/12,5A: RS-150-12
- 24V/6,5A: LRS-150-24

<a href="/images/modules/supply/supply_4.jpeg" target="_blank">![Supply 4](/images/modules/supply/supply_4.jpeg)</a>

Besides the display for each supply voltage and the main switch, there's also an "engineering" connector. It carries all three voltages so that I can tap into the necessary voltage during the development phase of a module. If you're interested, I've included some more information about it below.

<a href="/images/modules/supply/supply_5.jpeg" target="_blank">![Supply 5](/images/modules/supply/supply_5.jpeg)</a>

<a href="/images/modules/supply/supply_7.jpeg" target="_blank">![Supply 7](/images/modules/supply/supply_7.jpeg)</a>

For distributing the voltages, I opted for XLR connectors. These are really good in terms of current handling capacity. Each module can therefore have its own power supply. Since each module is equipped with a mainboard, I also distributed the 5V supply to each XLR connector.

Furthermore, each module has a connection to GND/PE (bridged here). This primarily serves as protection. Finally, the power supply module is connected to 230V mains voltage.

There is one disadvantage, however: If a module requires both voltage ranges (24V and 12V), two power supply lines would have to be connected. This hasn't been necessary so far – but perhaps it will be in the future...?

<a href="/images/modules/supply/supply_8.jpg" target="_blank">![Supply 8](/images/modules/supply/supply_8.jpg)</a>

## Engineering Adapter

<a href="/images/modules/supply/supply_engadapter_board.png" target="_blank">![Supply Engineering Adapter Board](/images/modules/supply/supply_engadapter_board.png)</a>

<a href="/images/modules/supply/supply_engadapter_schematic.png" target="_blank">![Supply Engineering Adapter Schematic](/images/modules/supply/supply_engadapter_schematic.png)</a>

## Case

<a href="/images/modules/supply/supply_frontpanel.png" target="_blank">![Supply Frontpanel](/images/modules/supply/supply_frontpanel.png)</a>

<a href="/images/modules/supply/supply_backpanel.png" target="_blank">![Supply Frontpanel](/images/modules/supply/supply_backpanel.png)</a>

## Outlook

One possible evolutionary step would be voltage and current monitoring of the individual power supplies. However, this would only be possible to a limited extent, since each module without its supply voltage can no longer participate in the bus and therefore no longer in data exchange.
