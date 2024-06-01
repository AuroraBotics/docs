# Report Flash Frame

The **Report Flash Frame** will report the data stored in flash. This frame is automatically sent after altering flash memory (via [**Set Flash Frame**](./set_flash.md) or [**Reset Flash Frame**](./reset_flash)), or after manually requesting it via a [**Get Flash Frame**](./get_flash.md).

## Data

| Field | Start Bit | Data Length | Description |
| :- | :- | :- | :- |
| Index | 0 | 1 Byte | The flash address index. |
| Data | 8 | 6 Bytes | The data stored in the flash at the provided index. |
| Flags | 56 | 1 Byte | flags which indicate the behavior of the data stored in flash. |

## Flags

| Bits | Flag | If False | If True |
| :- | :- | :- | :- |
| 0 | Ephemeral | Data transmitted is persistent & written to flash. | Data transmitted is ephemeral, and not written to flash. |
| 1-7 | Reserved | Reserved for future implementation. | Reserved for future implementation. |