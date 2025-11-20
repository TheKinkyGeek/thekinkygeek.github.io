# Architektur

Um Verständnis dafür zu bekommen, wie und was ich erbaut habe, musst Du Dich mit der Architektur dieses "Frameworks" auseinander setzen. Ich nenne es ganz bewusst Framework. Das liegt daran, dass ich es noch nicht beendet habe und auch noch nicht weiß, wohin mich diese Reise führt. Beim spielen hat man oft die besten Ideen.

Ich bin kein Freund des Begriffes "Architektur". Mir fällt nur leider kein anderer Name ein um Dir eine Übersicht aller Funktionen auf einmal zu erklären.

An einem Bild, kannst Du meine Entwicklungsschritte im Detail verfolgen:

<a href="/images/architecture.png" target="_blank">![Architecture](/images/architecture.png)</a>

- In gestricheltem Rahmen siehst Du Module in der Hardware als auch in der Software Ausprägung, die sich noch im Aufbau bzw. in der Planung befinden.
- Realisiert wurde der übrige Teil.

## Hardware

Damit ich über die Zeit die Möglichkeit habe, die Funktionalität zu erweitern, habe ich mich für ein Modulares Design entschieden. Im Bereich [Module](/de/modules/) findest Du eine Übersicht der einzelnen Module mit ihrer jeweiligen Funktion(en). Unabhängig von der Hardware ist jedes Modul auch mit einer Firmware ausgerüstet die Steuerungsaufgaben entgegen nimmt und auch Daten an die Software zurück sendet.

Untereinander und übergeordnet zur Software, erfolgt die Kommunikation über einen CAN Bus mit einer Datenrate von 250kbps. Für mich hat der CAN Bus jede Menge Vorteile die ich nicht einzeln ausführen möchte. Da er extrem Robust ist und einfach innerhalb der Module an einen Controller anzubinden ist, habe ich mich dafür entschieden.

## Software

Die Software ist ebenfalls Modular aufgebaut. Der Gedanke das einzelne Funktionalitäten mit vortschreitender Entwicklung dazu kommen dürfen, gefällt mir sehr gut. Weiteres findest Du im Bereich: [Topping](/de/topping/).

## Verbindung

Die Software bindet die einzelnen Module über einen CAN-USB Adapter ein. Dadurch habe ich die Möglichkeit mit allen Modulen nahezu Gleichzeitig zu kommunizieren. Außerdem kann ich über den CAN-Bus auch die Firmware der einzelnen Module updaten. Das gibt mir immense Freiheiten da ich nicht jedesmal ein Modul aus dem Rack nehmen muss.

## Rack

Hier siehst Du das Rack im aktuellen Entwicklungsstand mit den (November 2025) realisierten Modulen:

<a href="/images/rack_2025_11.jpg" target="_blank">![Logo](/images/rack_2025_11.jpg)</a>

Die Rack-Schubladen unten habe ich erstmal weg gelassen. In ihnen sind Sensoren, Schalter, Leitungen, Lichtschranken, Magnete usw. untergebracht. Wenn ich sie etwas besser aufgeräumt habe, gibt es mehr zu sehen :)
