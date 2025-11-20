# Supply Modul

Das Supply Modul dient in erster Linie dazu, die Notwendigen Versorgung der einzelnen Module sicher zu stellen. Es hat keine Buskommunikation und nimmt daher auch nicht an einer übergeordneten Funktionalität Teil. 

Ich habe mich bewusst für die drei Spannungen 5V, 12V und 24V entschieden, da ich damit einen breiten Bereich abdecken kann. Muss aus einem triftigen Grund noch eine weitere Versorgung hinzugefügt werden, dann eben in einem zusätzlichen Modul.

Eine gute Versorgung bieten die MeanWell Netzteile. Sie sind sehr stabil und mechanisch als auch elektrotechnisch einfach unterzubringen:

- 5V/10A: LRS-50-5
- 12V/12,5A: RS-150-12
- 24V/6,5A: LRS-150-24

<a href="/images/modules/supply/supply_4.jpeg" target="_blank">![Supply 4](/images/modules/supply/supply_4.jpeg)</a>

Neben der Anzeige der einzelnen Versorgungsspannung und dem Hauptschalter, gibt es noch einen "Engineering" Stecker. Er beinhaltet alle drei Spannungen damit ich während der Entwicklungsphase eines Modules die Möglichkeit habe, dort die Notwendige Spannung abzugreifen. Falls es Dich interessiert, habe ich weiter unten dazu ein paar Informationen.

<a href="/images/modules/supply/supply_5.jpeg" target="_blank">![Supply 5](/images/modules/supply/supply_5.jpeg)</a>

<a href="/images/modules/supply/supply_7.jpeg" target="_blank">![Supply 7](/images/modules/supply/supply_7.jpeg)</a>

Zur Verteilung der Spannungen habe ich mich für einen XLR Steckverbinder entschieden. Diese sind aus Gründen der Strombelastbarkeit echt gut. Jedes Modul kann somit ihre eigene Spannungsversorgung bekommen. Da jedes Modul mit einem Main Board ausgerüstet ist, habe ich die 5V Versorgung ebenfalls auf jeden XLR Anschluss verteilt. 

Außerdem hat jedes Modul den Bezug zu GND/PE (hier gebrückt) zu bekommen. Es dient Hauptsächlich der Absicherung. Schließlich wird das Versorgungsmodul mit 230V Netzspannung verbunden.

Einen Nachteil gibt es allerdings: Sollte ein Modul beide Spannungsbereiche (24V und 12V) brauchen, so müssten zwei Versorgungsleitungen angeschlossen werden. Bisher war das noch nicht der Fall - aber womöglich...?

<a href="/images/modules/supply/supply_8.jpg" target="_blank">![Supply 8](/images/modules/supply/supply_8.jpg)</a>

## Engineering Adapter

<a href="/images/modules/supply/supply_engadapter_board.png" target="_blank">![Supply Engineering Adapter Board](/images/modules/supply/supply_engadapter_board.png)</a>

<a href="/images/modules/supply/supply_engadapter_schematic.png" target="_blank">![Supply Engineering Adapter Schematic](/images/modules/supply/supply_engadapter_schematic.png)</a>

## Gehäuse

<a href="/images/modules/supply/supply_frontpanel.png" target="_blank">![Supply Frontpanel](/images/modules/supply/supply_frontpanel.png)</a>

<a href="/images/modules/supply/supply_backpanel.png" target="_blank">![Supply Frontpanel](/images/modules/supply/supply_backpanel.png)</a>

## Ausblick

Ein möglicher Evolutionsschritt wäre eine Spannungs- und Stromüberwachung der einzelnen Netzteile. Wobei das nur in begrenzten Umfang möglich wäre, da jedes Modul ohne die Versorgungsspannung nicht mehr am Bus und damit auch nicht mehr am Datenaustausch Teil nehmen kann.
