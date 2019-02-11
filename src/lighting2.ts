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
import { Protocol, Type } from ".";
import { FrameDescription } from "@domojs/protocol-parser";

export enum SubType
{
    AC = 0x00,
    HomeEasyEU = 0x01,
    ANSLUT = 0x02,
    KambrookRF3672 = 0x03,
};

export namespace Internal
{
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

    export enum Command
    {
        Off = 0x00,
        On = 0x01,
        SetLevel = 0x02,
        GroupOff = 0x03,
        GroupOn = 0x04,
        SetGroupLevel = 0x05,
    }

    export interface Device<TCommand extends Command>
    {
        id1: number;
        filler1: number;
        id2: number;
        id3: number;
        id4: number;
        unitCode: UnitCode;
        command: TCommand;
        level: number;
        filler2: number;
        rssi: number;
    }

    export namespace AC
    {
        export type Device = Internal.Device<Command>
    }
    export namespace HomeEasy
    {
        export type Device = Internal.Device<Command>
    }
    export namespace Anslut
    {
        export type Device = Internal.Device<Command>
    }

    export namespace Kambrook
    {
        export type Device = Internal.Device<Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }
}

export type Device =
    Internal.AC.Device |
    Internal.HomeEasy.Device |
    Internal.Anslut.Device |
    Internal.Kambrook.Device;

export function init()
{
    var frames: FrameDescription<Device>[] = [
        { name: 'id1', type: 'uint2' },
        { name: 'filler1', type: 'uint6' },
        { name: 'id2', type: 'uint8' },
        { name: 'id3', type: 'uint8' },
        { name: 'id4', type: 'uint8' },
        { name: 'unitCode', type: 'uint8' },
        { name: 'command', type: 'uint8' },
        { name: 'level', type: 'uint8' },
        { name: 'filler2', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ];
    Protocol.register<Device>('type', Type.LIGHTING2.AC, frames);
    Protocol.register<Device>('type', Type.LIGHTING2.HomeEasyEU, frames);
    Protocol.register<Device>('type', Type.LIGHTING2.ANSLUT, frames);
    Protocol.register<Device>('type', Type.LIGHTING2.KambrookRF3672, frames);
}