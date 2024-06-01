# Settings

AuroraBotics devices store various settings in flash memory on the micro-controller.
These settings can be written and read using the appropriate [CAN API](./can#can-api).

## Settings Table & Values

| Setting | Index | Default Value | Valid Values | Permissions |
| :- | :-: | :-: | :-: | :-: |
| [Version](#version) | `0x00` | Hardware & Firmware Version | NA | R |
| [CAN ID](#can-id) | `0x01` | 0 | [0,63] | RW |
| [Name Segment 0](#name-segments) | `0x02` | Device Specific | Any | RW |
| [Name Segment 1](#name-segments) | `0x03` | Device Specific | Any | RW |
| [Name Segment 2](#name-segments) | `0x04` | Device Specific | Any | RW |
| [Name Segment 3](#name-segments) | `0x05` | Device Specific | Any* | RW |
| [Status Frame Period](#status-frame-period) | `0x06` | 1000 | [0,65535] | RW |
| Reserved | `0x07` - `0x0F` | NA | NA | NA | NA |

### Version

Hardware & firmware version information.

| Data | Data Type | Description |
| :-: | :-: | :-: |
| Byte 0 | uint8 | Major Firmware Revision |
| Byte 1 | uint8 | Minor Firmware Revision |
| Byte 2 | uint8 | Major Hardware Revision |
| Byte 3 | uint8 | Minor Hardware Revision |

### CAN ID

The CAN ID, which is used in arbitration of CAN frames emitted by the device.

| Data | Data Type | Description |
| :-: | :-: | :-: |
| Byte 0 | uint8 | CAN ID |

### Name Segments

All name segments are the same, the data is accessed starting in **Name Segment 0**, ending in **Name Segment 3**.
This provides a total of 23 characters for the name.

Byte 5 of **Name Segment 3** must be a null character (`\0`), and is actually **read only**.
Providing a null character in any other byte in any name segment will terminate the string at that byte.

| Data | Data Type | Description |
| :-: | :-: | :-: |
| Byte 0 | uint8 / char | Character 0 |
| Byte 1 | uint8 / char | Character 1 |
| Byte 2 | uint8 / char | Character 2 |
| Byte 3 | uint8 / char | Character 3 |
| Byte 4 | uint8 / char | Character 4 |
| Byte 5 | uint8 / char | Character 5 |

### Status Frame Period

The interval in milliseconds in which the device emits a status frame on the CAN bus.

| Data | Data Type | Description |
| :-: | :-: | :-: |
| Bytes 0-1 | uint16 | milliseconds |

