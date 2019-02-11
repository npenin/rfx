import { Protocol, Type } from ".";

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
    IkeaKoppla = 0x00,
};

export namespace Internal
{
    export enum System
    {
        Code1 = 0x01,
        Code2 = 0x02,
        Code3 = 0x03,
        Code4 = 0x04,
        Code5 = 0x05,
        Code6 = 0x06,
        Code7 = 0x07,
        Code8 = 0x08,
        Code9 = 0x09,
        Code10 = 0x0A,
        Code11 = 0x0B,
        Code12 = 0x0C,
        Code13 = 0x0D,
        Code14 = 0x0E,
        Code15 = 0x0F,
        Code16 = 0x10,
    }

    export enum Command
    {
        Bright = 0x00,
        Dim = 0x08,
        On = 0x10,
        Level1 = 0x11,
        Level2 = 0x12,
        Level3 = 0x13,
        Level4 = 0x14,
        Level5 = 0x15,
        Level6 = 0x16,
        Level7 = 0x17,
        Level8 = 0x18,
        Level9 = 0x19,
        Off = 0x1A,
        Program = 0x1C,
    }

    export interface Device
    {
        system: System;
        channel: number;
        command: Command;
        batteryLevel: number;
        rssi: number;
    }
}

export type Device = Internal.Device

export function init()
{
    Protocol.register<Device>('type', Type.LIGHTING3.IkeaKoppla, [
        { name: 'system', type: 'uint8' },
        { name: 'channel', type: 'uint16' },
        { name: 'command', type: 'uint8' },
        { name: 'batteryLevel', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);
}