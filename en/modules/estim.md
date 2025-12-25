# Estim Module

Basically, the Estim module consists of a modified 2B Power Box from E-STIM Systems. The battery backup has been completely removed. I also replaced the voltage regulator so that I can work better with a 12V supply. Otherwise, the intensity is more difficult to control.

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

## topping [Module Controller]

To test individual modes of the 2B, I created an additional interface. It can be accessed via the **Module Controller**:

<a href="/images/topping/setup/topping_setup_modules_actions_estim.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_modules_actions_estim.png)</a>

I set up the window similarly to the [Commander Software](https://e-stim.info/commander) from [E-Stim Systems](http://www.e-stim.co.uk/). I added a few things for convenience.

<a href="/images/topping/setup/topping_setup_estim_module_controller.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller.png)</a>

The lower section contains the control for the multiplexer, which has three modes.

### Kanal A / B Independent

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_prg.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_prg.png)</a>

Each channel can be controlled separately. The output and the time can be selected. After the time has elapsed, the selected output is deactivated. I also want to use this for more automated testing.

### Kanal A / B Combined

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_combined.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_combined.png)</a>

In combined mode, the two channels are grouped together over time and controlled jointly. Here too, the respective output of channel A/B can be selected separately.

### Manually

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_man.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_man.png)</a>

If you simply want to control the multiplexer manually, that is also possible.

### Off

The multiplexer can also be completely deactivated. In this case, the Estim module behaves like a standard 2B Power Box.

## topping [Presets]

The Commander software has the ability to execute various sequences. I've done something similar. My idea was to be able to execute these presets automatically or manually during a session. I still need to figure out the specifics of how to integrate this into the session.

The presets also consist of a sequence of commands that the control software executes one after the other, thus controlling the 2B Power Box. For this, I wrote a small database interface where the presets are stored. I also have the option of assigning different levels to the presets, from a minimum level of 1 (low intensity) to a maximum level of 10 (extreme intensity). This allows for granular adjustments to the settings.

Here's a short demonstration of controlling the preset from the database. The runtime environment works fully automatically and can be combined in various ways and levels within a session. This example demonstrates the Knocking preset:

<video src="/videos/topping/setup/topping_setup_estim_presets_runtime_knocking_demo.mp4" controls width="600"></video>
