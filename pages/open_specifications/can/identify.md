# Identify Frame

The **Identify Frame** commands the device to rapidly blink the onboard LEDs to help visually identify the device.

Once the device receives the **Identify Frame**, it will begin to identify itself for 20 milli-seconds * the provided time variable. After this time has elapsed, the device will return to its natural state.

## Data

| Field | Start Bit | Data Length | Description |
| :- | :- | :- | :- |
| Time | 0 | 1 Byte | Time * 20 milli-seconds to identify for. |