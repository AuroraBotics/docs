# Set Flash Frame

The **Set Flash Frame** has the device write values into the user space of its flash memory. Some values are read / write, and some are read only. Attempting to write to a read only address or write an invalid value will result in a fault.

## Data

| Field | Start Bit | Data Length | Description |
| :- | :- | :- | :- |
| Index | 0 | 1 Byte | The flash address index to write to, the device will take care of finding the physical flash location. |
| Data | 8 | 6 Bytes | The data to write into the flash memory. |
| flags | 56 | 1 Byte | flags which may change the behavior of the command. |`0` indicates for the device to write to flash, persisting the value, `1` indicates to have the device treat the data as *ephemeral*, or non-persistent. |

## Flags

| Bit | Flag | If False | If True |
| :- | :- | :- | :- |
| 0 | Ephemeral | Data transfered will be persistent. | Data transfered will be ephemeral. |
| 1 | Reserved | Reserved for future implementation. | Reserved for future implementation. |
| 2 | Reserved | Reserved for future implementation. | Reserved for future implementation. |
| 3 | Reserved | Reserved for future implementation. | Reserved for future implementation. |
| 4 | Reserved | Reserved for future implementation. | Reserved for future implementation. |
| 5 | Reserved | Reserved for future implementation. | Reserved for future implementation. |
| 6 | Reserved | Reserved for future implementation. | Reserved for future implementation. |
| 7 | Reserved | Reserved for future implementation. | Reserved for future implementation. |