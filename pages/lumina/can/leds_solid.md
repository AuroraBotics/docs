# LEDs Solid Frame

The **LEDs Solid Frame** commands Lumina to set the specified range of LEDs to the specified color passed in an ensuing **[Color Data Frame](./color_data)**.

## Data

| Field | Start Bit | Data Length | Data Type | Description |
| :- | :-: | :-: | :-: | :- |
| LED Start Index | 0 | 2 Bytes | uint16 | The start index of the LEDs to set |
| LED End Index | 16 | 2 Bytes | uint16 | The end index of the LEDs to set |
