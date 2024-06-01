# Animation Sequence Frame

The **Animation Sequence Frame** commands Lumina to run multiple animations sequentially.

After Lumina receives the **Animation Sequence Frame** it will be waiting for **LEDs X Frames** (and their respective **Color Data Frames**).

So for instance you would send Lumina: **Animation Sequence Frame** -> **LEDs Solid Frame** -> **Color Data Frame** -> **LEDs Comet Frame** -> **Color Data Frame**.

## Data

| Field | Start Bit | Data Length | Data Type | Description |
| :- | :-: | :-: | :-: | :- |
| Num Animations | 0 | 1 Byte | uint8 | Number of animations in the sequence |
| Advance Interval | 8 | 2 Byte | uint16 | Time in 100ms to play each animation before continuing to the next |
| Auto Clear Flag | 9 | 1 Bit | boolean | To clear the pixels between animations |
| Random Order Flag | 10 | 1 Bit | boolean | To play the animations in a random order |
| Reserved Flags | 11 | 6 Bits | NA | Reserved for future implementation |