# Settings

AuroraBotics devices store various settings in flash memory on the micro-controller.
These settings can be written and read using the appropriate [CAN API](./can#can-api).

## Settings Table & Values

| Setting | Index | Default Value | Valid Values | Permissions |
| :- | :-: | :-: | :-: | :-: |
| [Version](#version) | 0x00 | Hardware & Firmware Version | NA | R |
| [CAN ID](#can-id) | 0x01 | 0 | [0,63] | RW |
| [Name Segment 0](#name-segments) | 0x02 | Device Specific | Any | RW |
| [Name Segment 1](#name-segments) | 0x03 | ... | ... | RW |
| [Name Segment 2](#name-segments) | 0x04 | ... | ... | RW |
| [Name Segment 3](#name-segments) | 0x05 | ... | ... | RW |
| [Status Frame Period](#status-frame-period) | 0x06 | 1000 | [0,65535] | RW |

### Version

Hardware & firmware version information.

| Data | Description |
| :-: | :-: |
| Byte 0 | Major Firmware Revision (uint8) |
| Byte 1 | Minor Firmware Revision (uint8) |
| Byte 2 | Major Hardware Revision (uint8) |
| Byte 3 | Minor Hardware Revision (uint8) |

### CAN ID

The CAN ID, which is used in arbitration of CAN frames emitted by the device.

| Data | Description |
| :-: | :-: |
| Byte 0 | CAN ID [0-63] (uint8) |

### Name Segments

All name segments are the same, the data is accessed starting in **Name Segment 0**, ending in **Name Segment 3**.
This provides a total of 23 characters for the name.

Byte 6 of **Name Segment 3** must be a null character (`\0`), and is actually **read only**.
Providing a null character in any other byte in any name segment will terminate the string at that byte.

| Data | Description |
| :-: | :-: |
| Byte 0 | Character 0 (uint8 / char) |
| Byte 1 | Character 1 (uint8 / char) |
| Byte 2 | Character 2 (uint8 / char) |
| Byte 3 | Character 3 (uint8 / char) |
| Byte 4 | Character 4 (uint8 / char) |
| Byte 5 | Character 5 (uint8 / char) |
| Byte 6 | Character 6 (uint8 / char) |

### Status Frame Period

The interval in milli-seconds in which the device emits a status frame on the CAN bus.

| Data | Description |
| :-: | :-: |
| Bytes 0-1 | milli-seconds (uint16) |

