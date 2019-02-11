/*
Copyright 2011-2019, RFXCOM

ALL RIGHTS RESERVED.
The RFXtrx protocol is owned by RFXCOM, and is protected under
Netherlands Copyright Laws and Treaties and shall be subject to the 
exclusive jurisdiction of the Netherlands Courts. The information from this
file may freely be used to create programs to exclusively interface with
RFXCOM products only.

The above copyright notice shall be included in all copies or substantial
portions of this file.
'----------------------------------------------------------------------------
*/

export enum SubType
{
    RawClassicKeeLoq = 0x00,
    RollingCodePacket = 0x01,
    RawAESKeeLoq = 0x02,
    RawClassicKeeLoqPacket = 0x03,
};

export namespace Security2
{
    export interface Device
    {
        id1: number;
        id2: number;
        id3: number;
        id4: number;
        id5: number;
        id6: number;
        id7: number;
        id8: number;
        id9: number;
        id10: number;
        id11: number;
        id12: number;
        id13: number;
        id14: number;
        id15: number;
        id16: number;
        id17: number;
        id18: number;
        id19: number;
        id20: number;
        id21: number;
        id22: number;
        id23: number;
        id24: number;
        batteryLevel: number;
        rssi: number;
    }
}