# LEDs Comet

The **LEDs Comet Frame** commands Lumina to set the specified range of LEDs to a comet animation, with the color passed by an ensuing **[Color Data Frame](./color_data)**.

## Data

| Field | Start Bit | Data Length | Data Type | Description |
| :- | :-: | :-: | :-: | :- |
| LED Start Index | 0 | 2 Bytes | uint16 | The start index of the LEDs to set |
| LED End Index | 16 | 2 Bytes | uint16 | The end index of the LEDs to set |
| Animation Speed | 32 | 1 Byte | uint8 | The time in 100ms for one cycle to complete |
| Comet Length | 40 | 1 Byte | uint8 | The number of LEDs to have in the comet |
| Reverse | 48 | 1 Bit | boolean | Reverses the animation |
| Bounce | 49 | 1 Bit | boolean | Bounces the comet between the edges of the range |
| Wrap | 50 | 1 Bit | boolean | Wraps the animation through the ends of the range |
| Reserved Flags | 51 | 5 Bits | NA | Reserved for future implementation |