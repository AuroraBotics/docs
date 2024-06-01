# LEDs Color Cycle Frames

The **LEDs Color Cycle Frame** commands Lumina to set the specified range of LEDs to a specified color cycle, whose colors are passed with ensuing **[Color Data Frames](./color_data)**.

## Data

| Field | Start Bit | Data Length | Data Type | Description |
| :- | :-: | :-: | :-: | :- |
| LED Start Index | 0 | 2 Bytes | uint16 | The start index of the LEDs to set |
| LED End Index | 16 | 2 Bytes | uint16 | The end index of the LEDs to set |
| Animation Speed | 32 | 1 Byte | uint8 | The time each color will be shown in 100ms (0ms - 25,500ms) |
| Num Colors | 40 | 1 Byte | uint8 | The number of colors to be cycled through, this also specifies the amount of **[Color Data Frames](./color_data)** Lumina expects to be ensuant |
