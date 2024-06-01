# LEDs Rainbow Frame

The **LEDs Rainbow Frame** commands Lumina to set the specified range of LEDs to a rainbow animation.

## Data

| Field | Start Bit | Data Length | Data Type | Description |
| :- | :-: | :-: | :-: | :- |
| LED Start Index | 0 | 2 Bytes | uint16 | The start index of the LEDs to set |
| LED End Index | 16 | 2 Bytes | uint16 | The end index of the LEDs to set |
| Animation Period | 32 | 1 Byte | uint8 | The time each rainbow cycle will take in 100ms (0ms - 25,500ms) |
| $\Delta t$ or $\Delta x$ Flag | 40 | 1 bit | boolean | Whether each LED is the same color, with the rainbow propagating over time; or each LED is a different color, with the rainbow propagating with respect to position over time |
| Reverse | 41 | 1 Bit | boolean | Reverses the animation |
| Reserved | 42 | 6 Bits | NA | Reserved for future implementation |
