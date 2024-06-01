# LEDs Pulse

The **LEDs Pulse Frame** commands Lumina to set the specified range of LEDs to a pulse animation, with a specified period, intensity, and the color, which is passed with an ensuing **[Color Data Frame](./color_data)**.

## Data

| Field | Start Bit | Data Length | Data Type | Description |
| :- | :-: | :-: | :-: | :- |
| LED Start Index | 0 | 2 Bytes | uint16 | The start index of the LEDs to set |
| LED End Index | 16 | 2 Bytes | uint16 | The end index of the LEDs to set |
| Animation Speed | 32 | 1 Byte | uint8 | The time in 100ms for one cycle to complete |
| Breath Speed | 40 | 1 Byte | uint8 | The time in 100ms to hold at min and max intensities |
| Min Intensity | 48 | 1 Byte | uint8 | The minimum brightness to go to |
| Max Intensity | 56 | 1 Byte | uint8 | The maximum brightness to go to |
