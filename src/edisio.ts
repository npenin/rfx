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
    Controller = 0x00,
};

export enum Command
{
    Off = 0x00,
    On = 0x01,
    Toggle = 0x02,
    SetLevel = 0x03,
    Bright = 0x04,
    Dim = 0x05,
    ToggleDim = 0x06,
    StopDim = 0x07,
    RGB = 0x08,
    Learn = 0x09,
    ShutterOpen = 0x0A,
    ShutterStop = 0x0B,
    ShutterClose = 0x0C,
    ContactNormal = 0x0D,
    ContactAlert = 0x0E,
}

export enum UnitCode
{
    Unit1 = 0x01,
    Unit2 = 0x02,
    Unit3 = 0x03,
    Unit4 = 0x04,
    Unit5 = 0x05,
    Unit6 = 0x06,
    Unit7 = 0x07,
    Unit8 = 0x08,
    Unit9 = 0x09,
    Unit10 = 0x0A,
    Unit11 = 0x0B,
    Unit12 = 0x0C,
    Unit13 = 0x0D,
    Unit14 = 0x0E,
    Unit15 = 0x0F,
    Unit16 = 0x10,
}

export enum Repeat
{
    Repeat0 = 0x00,
    Repeat1 = 0x01,
    Repeat2 = 0x02,
    Repeat3 = 0x03,
    Repeat4 = 0x04,
    Repeat5 = 0x05,
}

export namespace Tel010
{
    export interface Device
    {
        id1: number;
        id2: number;
        id3: number;
        id4: number;
        unitCode: UnitCode;
        command: Command;
        level: number;
        R: number;
        G: number;
        B: number;
        maxRepeat: Repeat;
        repeatCnt: Repeat;
        batteryLevel: number;
        rssi: number;
    }
}