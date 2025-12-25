# Estim Modul

Grundsätzlich besteht das Estim Modul aus einer umgebauten und modifizierten 2B Power Box von E-STIM Systems. Die Batterieunterstützung ist komplett raus geflogen. Dazu habe ich den Spannungsregler ersetzt, damit ich mit der 12V Versorgung besser arbeiten kann. Die Intensität lässt sich ansonsten weniger gut Regeln.

Die Bedienung habe ich nahezu wie beim 2B gelassen. Das heißt das Estim Modul kann auch wie ein 2B arbeiten ohne eine Rückläufige Anbindung. Das ist ganz praktisch weil ich damit auch Tests mit neuen Elektroden machen kann.

Die Verbindungen mit der Steuerplatine habe ich absichtlich nach außen geführt. So kann ich die Software Commander von E-STIM Systems zusätzlich verwenden. Wobei ich die Funktionalität mittlerweile an meine Belange angepasst habe und ein eigenes Software-Interface dazu erstellt habe.

## Aufbau

<a href="/images/modules/estim/estim_modul_structure.png" target="_blank">![Estim Modul Structure](/images/modules/estim/estim_modul_structure.png)</a>

## Multiplexer

Zu den Steuerungsfunktionalitäten des Moduls, habe ich mich dafür entschieden, einen Multiplexer zu integrieren. Damit kann ich aus den beiden Kanälen A und B, vier Ausgänge machen. Natürlich lassen sich die vier Ausgänge nicht simultan betreiben. Trotzdem lassen sich vier Elektroden an zwei Kanälen umschalten.

## Gehäuse

<a href="/images/modules/estim/estim_case_frontpanel.png" target="_blank">![Estim Case Frontpanel](/images/modules/estim/estim_case_frontpanel.png)</a>

<a href="/images/modules/estim/estim_case_backpanel.png" target="_blank">![Estim Case Backpanel](/images/modules/estim/estim_case_backpanel.png)</a>

<a href="/images/modules/estim/estim_case_multiplexer_frontpanel.png" target="_blank">![Estim Case Multiplexer Frontpanel](/images/modules/estim/estim_case_multiplexer_frontpanel.png)</a>

<a href="/images/modules/estim/estim_case_multiplexer_backpanel.png" target="_blank">![Estim Case Multiplexer Backpanel](/images/modules/estim/estim_case_multiplexer_backpanel.png)</a>

## topping [Modul Controller]

Damit ich einzelne Modes des 2B testen kann, habe ich zusätzlich ein Interface erzeugt. Über den **Module Controller** aufrufbar:

<a href="/images/topping/setup/topping_setup_modules_actions_estim.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_modules_actions_estim.png)</a>

Ich habe das Fenster ähnlich aufgebaut wie die [Commander Software](https://e-stim.info/commander) von [E-Stim Systems](http://www.e-stim.co.uk/). Ein paar Dinge habe ich mir des Komfort Wegens dazu gebaut.

<a href="/images/topping/setup/topping_setup_estim_module_controller.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller.png)</a>

Im Unteren Bereich befindet sich die Steuerung für den Multiplexer den es in drei Modis gibt.

### Kanal A / B Unabhängig

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_prg.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_prg.png)</a>

Jeder Kanal kann separat angesteuert werden. Der Ausgang kann ausgewählt werden und die Zeit ebenfalls. Nach abgelaufener Zeit, wird der selektierte Ausgang deaktiviert. Auch damit möchte ich etwas automatisierter Testen.

### Kanal A / B Kombiniert

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_combined.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_combined.png)</a>

Im Kombinierten Modus, werden die beiden Kanäle über die Zeit zusammen gefasst und gemeinsam gesteuert. Auch hier lässt sich der jeweilige Ausgang von Kanal A/B separat auswählen.

### Manuell

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_man.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_man.png)</a>

Möchte man den Multiplexer einfach manuell steuern, ist das ebenfalls möglich. 

### Aus

Der Multiplexer kann auch komplett deaktiviert werden. So verhält sich dann das Estim Modul wie eine gewöhnliche 2B Power Box.

## topping [Presets]

Die Commander Software hat die Möglichkeit verschiedene Abfolgen nacheinander auszuführen. Ich habe das ähnlich gemacht. Mein Gedanke war eigentlich, dass ich während einer Session, automatisch oder gesteuert, diese Presets ausführen kann. Wie ich das im einzelnen in die Session integriere, muss ich noch heraus finden.

Die Presets bestehen also ebenfalls aus einer Abfolge von bestimmten Befehlen die die Steuerungssoftware nacheinander ausführt und so die 2B Power Box steuert. Dazu habe ich mir eine kleine Datenbankanbindung geschrieben, in der die Presets gespeichert werden. Außerdem habe ich noch die Möglichkeit, die Presets mit unterschiedlichen Levels auszurüsten. Minimal Level 1 (geringe Intensität) bis zu einem Maximalen Level 10 (schreckliche Intensität). So lässt sich etwa die Einstellungen granulieren.

Hier eine kurze Demonstration der Steuerung über ein Preset aus der Datenbank. Die Laufzeitumgebung arbeitet vollautomatisch und kann in verschiedenen Variationen und Levels innerhalb einer Session kombiniert werden. Dieses Beispiel zeigt das Knocking:

<video src="/videos/topping/setup/topping_setup_estim_presets_runtime_knocking_demo.mp4" controls width="600"></video>
