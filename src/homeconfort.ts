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
    Tel010 = 0x00,
};

export enum Command
{
    Off = 0x00,
    On = 0x01,
    GroupOff = 0x02,
    GroupOn = 0x03,
}

export enum HouseCode
{
    A = 0x41,
    B = 0x42,
    C = 0x43,
    D = 0x44,
}

export enum UnitCode
{
    Unit1 = 0x01,
    Unit2 = 0x02,
    Unit3 = 0x03,
    Unit4 = 0x04,
}

export namespace Tel010
{
    export interface Device
    {
        houseCode: HouseCode;
        unitCode: UnitCode;
        command: Command;
        batteryLevel: number;
        rssi: number;
    }
}