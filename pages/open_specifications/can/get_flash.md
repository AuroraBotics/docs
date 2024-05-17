# Get Flash Frame

The **Get Flash Frame** has the device report back with a [**Report Flash Frame**](./report_flash) containing the requested data.


## Data
| Field | Start Bit | Data Length | Description |
| :- | :- | :- | :- |
| Index | 0 | 1 Byte | The flash address index to read from, the device will take care of finding the physical flash location. |
