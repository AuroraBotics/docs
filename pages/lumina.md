# Lumina

## Description

Lumina is a 5V addressable LED controller with CAN bus functionality. Lumina supplies high amperage 5V output, and a small footprint (~3/4 x 2 1/2"), intended to be soldered directly onto the beginning of your LED strip.

## Features

- Onboard [status LEDs](./lumina/status_leds) for quick troubleshooting
- Firmware level [animations](./lumina/animation):
    - [Color cycle](./lumina/animation/color_cycle)
    - [Rainbow](./lumina/animation/rainbow)
    - [Chase](./lumina/animation/chase) & [Rainbow Chase](./lumina/animation/chase#animation-chase)
    - [Comet](./lumina/animation/comet) & [Rainbow Comet](./lumina/animation/comet#rainbow-comet)
    - [Sparkle](./lumina/animation/sparkle) & [Rainbow Sparkle](./lumina/animation/sparkle#rainbow-sparkle)
    - [Pulse](./lumina/animation/pulse) & [Sparkle Pulse](./lumina/animation/pulse#sparkle-pulse) & [Rainbow Sparkle Pulse](./lumina/animation/pulse#rainbow-sparkle-pulse)
- Firmware level animation composition
- Animation control, animation composition, & direct LED control via CAN
- Easy-to-use vendor library
- CAN 2.0B compatibility (FRC compatible)
- Standard 5V RGB LED (WS2812B / SK6812) data stream
- Standard LED strip solder pads, no spaghetti wires!
- Molex SL input connector for easy integration