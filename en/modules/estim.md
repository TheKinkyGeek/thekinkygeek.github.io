# Estim Module

Basically, the e-stim module consists of a modified 2B Power Box from E-STIM Systems. The battery backup has been completely removed. I also replaced the voltage regulator so that I can work better with a 12V supply. Otherwise, the intensity is more difficult to control.

I've kept the operation almost identical to the 2B. This means the Estim module can also work like a 2B without a reverse connection. This is quite practical because I can also use it to conduct tests with new electrodes.

I deliberately routed the connections to the control board externally. This allows me to also use the Commander software from E-STIM Systems. However, I have since adapted its functionality to my needs and created my own software interface for it.

## Structure

<a href="/images/modules/estim/estim_modul_structure.png" target="_blank">![Estim Modul Structure](/images/modules/estim/estim_modul_structure.png)</a>

## Multiplexer

Regarding the module's control functionalities, I decided to integrate a multiplexer. This allows me to create four outputs from the two channels A and B. Of course, the four outputs cannot be operated simultaneously. Nevertheless, four electrodes can be switched between two channels.

## Case

<a href="/images/modules/estim/estim_case_frontpanel.png" target="_blank">![Estim Case Frontpanel](/images/modules/estim/estim_case_frontpanel.png)</a>

<a href="/images/modules/estim/estim_case_backpanel.png" target="_blank">![Estim Case Backpanel](/images/modules/estim/estim_case_backpanel.png)</a>

<a href="/images/modules/estim/estim_case_multiplexer_frontpanel.png" target="_blank">![Estim Case Multiplexer Frontpanel](/images/modules/estim/estim_case_multiplexer_frontpanel.png)</a>

<a href="/images/modules/estim/estim_case_multiplexer_backpanel.png" target="_blank">![Estim Case Multiplexer Backpanel](/images/modules/estim/estim_case_multiplexer_backpanel.png)</a>
