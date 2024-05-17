# Status Frame

A periodic **Status Frame** containing generic data about the device and it's current state, including active and sticky faults.

## Data

| Field | Start Bit | Data Length | Description |
| :- | :- | :- | :- |
| Active Faults | 0 | 1 Byte | Bitmask of active faults, which are device specific. |
| Reserved | 8 | 1 Byte | Reserved for future implementation. |
| Sticky Fault | 16 | 1 Byte | Bitmask of sticky faults, which are device specific. |
| Reserved | 24 | 1 Byte | Reserved for future implementation. |
| Temperature | 32 | 1 Byte | Current temperature of device in °C. |
| Reserved | 40 | 3 Bytes | Reserved for future implementation. |
