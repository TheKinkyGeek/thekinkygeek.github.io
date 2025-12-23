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
