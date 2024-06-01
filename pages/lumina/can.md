# Lumina CAN Interface

See the Open-Source CAN page [here](/open_specifications/can) for information about general AuroraBotics CAN info.

## Lumina CAN API

In addition to the general CAN API provided to all AuroraBotics devices, Lumina also uses the following API to control the device.


### API Class 8: Strip Info

| Message | Index | API | Data Length (Bytes) | Direction (Controller's POV) |
| :- | :-: | :-: | :-: | :-: |
| [Set Strip Length](./can/strip_length) | 0 | `0x080` | 2 | Transmit |
| [Get Strip Length](./can/strip_length) | 1 | `0x081` | 2 | Receive (RTR) |
| [Set Pixels Per Meter](./can/ppm) | 2 | `0x082` | 1 | Transmit |
| [Get Pixels Per Meter](./can/ppm) | 3 | `0x083` | 1 | Receive (RTR) |
| Set Strip Brightness | 4 | `0x084` | 1 | Transmit |
| Get Strip Brightness | 5 | `0x085` | 1 | Receive (RTR) |

### API Class 9: LED / Animation Control

| Message | Index | API | Data Length (Bytes) | Direction (Controller's POV) |
| :- | :-: | :-: | :-: | :-: |
| [LEDs Solid](./can/leds_solid) | | | 4 | Transmit |
| [LEDs Rainbow](./can/leds_Rainbow) | | | 6 | Transmit |
| [LEDs Color Cycle](./can/leds_color_cycle) | | | 6 | Transmit |
| [LEDs Chase](./can/leds_chase) | | | 8 | Transmit |
| [LEDs Rainbow Chase](./can/leds_rainbow_chase) | | | 8 | Transmit |
| [LEDs Comet](./can/leds_comet) | | | 7 | Transmit |
| [LEDs Rainbow Comet](./can/leds_rainbow_comet) | | | 7 | Transmit |
| [LEDs Pulse](./can/leds_pulse) | | | 8 | Transmit |
| [Animation Sequence](./can/animation_sequence) | | | 4 | Transmit |
| [LEDs Data](./can/leds_data) | 15 | `0x0AF` | 4 | Transmit |
