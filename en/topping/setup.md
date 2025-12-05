# Setup

After starting `topping` in setup mode:

``` bash
$ python3 main.py --config "config/config.ini" setup
```

First, all connected and switched-on modules are detected. Information about the installed firmware is also provided.

<a href="/images/topping/setup/topping_setup_modules.png" target="_blank">![Modules](/images/topping/setup/topping_setup_modules.png)</a>

The **Actions** menu allows you to access the controls for each module, perform a firmware update, or access the associated database presets:

<a href="/images/topping/setup/topping_setup_modules_actions_estim.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_modules_actions_estim.png)</a>

## Estim Module Controller

<a href="/images/topping/setup/topping_setup_estim_module_controller.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller.png)</a>

I set up the window similarly to the [Commander Software](https://e-stim.info/commander) from [E-Stim Systems](http://www.e-stim.co.uk/). I added a few things for convenience.

Basically, I want to use it to test the functionalities of the 2B. It's perfectly suited for that purpose.

The lower section contains the control for the multiplexer, which has three modes.

### Multiplexer Controlling

#### Channels A / B Independent

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_prg.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_prg.png)</a>

#### Channels A / B Combined

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_combined.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_combined.png)</a>

#### Manually

<a href="/images/topping/setup/topping_setup_estim_module_controller_multiplexer_man.png" target="_blank">![Modules Action Estim](/images/topping/setup/topping_setup_estim_module_controller_multiplexer_man.png)</a>

### Presets

Just a quick demonstration of the controlling from a preset which is coming from the database. The runtime is working fully automatically which could be combined in a session in different variations and levels. This one is Knocking:

<video src="/videos/topping/setup/topping_setup_estim_presets_runtime_knocking_demo.mp4" controls width="600"></video>
