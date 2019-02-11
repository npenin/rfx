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
    Series5Chime = 0x00,
};

export namespace Tel010
{
    export interface Device
    {
        id1: number;
        id2: number;
        id3: number;
        id4: number;
        id5: number;
        id6: number;
        rfu: number;
        rssi: number;
    }
}