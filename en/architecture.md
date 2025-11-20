# Architecture

To understand how and what I've built, you have to familiarize yourself with the architecture of this "framework." I deliberately call it a framework. That's because I haven't finished it yet and don't yet know where this journey will lead me. The best ideas often come when you're playing.

I'm not a fan of the term "architecture." Unfortunately, I can't think of another name to give you an overview of all the functions at once.

You can follow my development steps in detail in one picture:

<a href="/images/architecture.png" target="_blank">![Logo](/images/architecture.png)</a>

- The dashed lines show modules in both hardware and software form that are still under construction or in the planning phase.
- The remaining part was completed.

## Hardware

To allow me to expand the functionality over time, I decided for a modular design. In the area [Module](/en/modules/) you will find an overview of the individual modules and their respective functions. Regardless of the hardware, each module is also equipped with firmware that accepts control commands and sends data back to the software.

Communication between modules and with the software takes place via a CAN bus with a data rate of 250 kbps. For me, the CAN bus offers numerous advantages that I won't list individually. Because it's extremely robust and easy to connect to a controller within the modules, I chose it.

## Software

The software is also modular in design. I really like the idea that individual functionalities can be added in development progresses. You can find more information in the following section: [Topping](/en/topping/).

## Connection

The software integrates the individual modules via a CAN-USB adapter. This allows me to communicate with all modules almost simultaneously. Furthermore, I can also update the firmware of individual modules via the CAN bus. This gives me immense flexibility, as I don't have to remove a module from the rack every time.

## Rack

Here you can see the rack in its current development state with the modules implemented (November 2025):

<a href="/images/rack_2025_11.jpg" target="_blank">![Logo](/images/rack_2025_11.jpg)</a>

I've left out the rack drawers at the bottom for now. They contain sensors, switches, cables, light barriers, magnets, etc. Once I've tidied them up a bit, there will be more to see :)
