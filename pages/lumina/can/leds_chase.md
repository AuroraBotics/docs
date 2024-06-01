# LEDs Chase

The **LEDs Chase Frame** commands Lumina to set the specified range of LEDs to a chase animation, with a specified spacing, and color, which is passed with an ensuing **[Color Data Frame](./color_data)**.

## Data

| Field | Start Bit | Data Length | Data Type | Description |
| :- | :-: | :-: | :-: | :- |
| LED Start Index | 0 | 2 Bytes | uint16 | The start index of the LEDs to set |
| LED End Index | 16 | 2 Bytes | uint16 | The end index of the LEDs to set |
| Animation Speed | 32 | 1 Byte | uint8 | The time in 10ms for one cycle to complete |
| Color Segment Length | 40 | 1 Byte | uint8 | The number of LEDs to have in the color segment |
| Blank Segment Length | 48 | 1 Byte | uint8 | The number of LEDs to have in the blank segment |
| Reverse | 56 | 1 Bit | boolean | Reverses the animation |
| Reserved Flags | 57 | 7 Bits | NA | Reserved for future implementation |