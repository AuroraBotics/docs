# Lumina PCB Design
## Power

### 5V

The TPS565201, and its passive components were chosen using TI WEBENCH due to it matching all design considerations: 6-15V input, 5A output, package which is easily hand assembled.
The TI WEBENCH report can be seen [here](/lumina/development/TPS565201DDCR_6-15V_to_5V_at_5A.pdf).

The battery Input supplies the board with 5V @ 5A max.
### 3v3

The LP38690DT-3.3_NOPB, and its passive components were also chosen using TI WEBENCH. The design considerations were based on the output voltage, and its ripple of the TPS565201. 4.8-5.2V @ 1A max (1A should be plenty of current for the logic components.) The TI WEBENCH report can be seen [here](/lumina/development/LP38690SD-3.3_NOPB_4.8-5.2V_to_3.3V_at_1A.pdf).

The 3v3 rail is derived from the 5V, meaning any current drawn by it is part of the 5A max, but 5A cannot be drawn by it.


### LEDs

Assuming we can draw the full 5A for the LEDs we can power $N=\dfrac{5000 mA}{60 mA}= 83$ LEDs at full brightness. an 8x8 matrix (64) LEDs is perfectly fine under these circumstances, larger quantities of LEDs will require a beefier power supply.

### Micro Controller

STM32F103 Lineup was chosen as it is one of the base mainstream lineups, meaning its plenty powerful, and should be perfectly capable of running this project. the [STM32F103RET6](https://www.st.com/en/microcontrollers-microprocessors/stm32f103re.html) was chosen specifically, due to its large amount of flash & RAM. Future revisions should consider a lower tiered chip closer matching required specs, but for development purposes I am choosing to pick something overly powerful.

[STM32F103CB Datasheet](https://www.st.com/resource/en/datasheet/stm32f103cb.pdf)
[STM32F103CB Reference Manual](https://www.st.com/resource/en/reference_manual/rm0008-stm32f101xx-stm32f102xx-stm32f103xx-stm32f105xx-and-stm32f107xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf)
[STM32F103CB Programming Manual](https://www.st.com/resource/en/programming_manual/pm0056-stm32f10xxx20xxx21xxxl1xxxx-cortexm3-programming-manual-stmicroelectronics.pdf)
#### MCU Power

1x 100n cap per VDD / VBAT / VDDA. Lumina does not use any analog functions, so VDDA is simply powered the same as VDD.

1x 10u cap.

#### MCU Oscillator

[Guidelines for oscillator design on STM32 MCUs](https://www.st.com/resource/en/application_note/an2867-guidelines-for-oscillator-design-on-stm8afals-and-stm32-mcusmpus-stmicroelectronics.pdf)

The clock for the MCU will be set to 64 MHz, using an 8Mhz HSE crystal resonator.

Crystal has an 8pF Load capacitance, assuming a stray capacitance of 5pF, the load capacitance capacitors should be 6pF.

#### CAN

with a clock speed of 64Mhz, the following settings are used for CAN:

| Key                              | Value              |
| -------------------------------- | ------------------ |
| **Prescaler (for Time Quantum)** | **4**              |
| *Time Quantum*                   | *125.0 ns*         |
| **Time Quanta in Bit Segment 1** | **6 Times**        |
| **Time Quanta in Bit Segment 2** | **1 Time**         |
| *Time for one Bit*               | *1000 ns*          |
| *Baud Rate*                      | *1000000 bit/s*    |
| **ReSynchronization Jump Width** | **4 Times**        |
| ***Other settings...***          | NA / Undecided Yet |

### Extra Components


| Description             | MPN                  | QTY                            |
| ----------------------- | -------------------- | ------------------------------ |
| Molex SL Crimp Housing  | 538-50-57-9404       | 1                              |
| Molex SL Crimp (22 AWG) | 538-16-02-0086-CT    | 100 (must be in orders of 100) |
| 120 Ohm Resistors       | 594-SFR16S0001200JA5 | 20 (just some extras)          |

FatFS
http://elm-chan.org/fsw/ff/00index_e.html
https://github.com/STMicroelectronics/STM32CubeF0/tree/master/Drivers/BSP/Adafruit_Shield


https://controllerstech.com/flash-programming-in-stm32/

https://community.st.com/t5/stm32-mcus-products/avoid-erase-of-user-space-flash-when-debugging/td-p/431847