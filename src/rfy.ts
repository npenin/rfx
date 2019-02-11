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
import { Protocol, Type, PacketType } from ".";

export enum SubType
{
    Standard = 0x00,
    Extended = 0x01,
    RESERVED = 0x02,
    ASA = 0x03,
};

export namespace Internal
{
    export enum Commands
    {
        stop = 0x00,
        up = 0x01,
        upStop = 0x02,
        down = 0x03,
        downStop = 0x04,
        upDown = 0x05,
        list = 0x06,
        program = 0x07,
        programLong = 0x08,
        programVeryLong = 0x09,
        stopLong = 0x0A,
        stopVeryLong = 0x0B,
        upDownLong = 0x0C,
        removeRemote = 0x0D,
        remoteRemotes = 0x0E,
        upShort = 0x0F,
        downShort = 0x10,
        upLong = 0x11,
        downLong = 0x12,
        enableSunWindDetection = 0x13,
        disableSunWindDetection = 0x14,
    };

    export interface Device<TUnitCode extends number>
    {
        id1: number;
        id2: number;
        id3: number;
        unitCode: TUnitCode;
        command: Commands;
        rfu: number;
        filler: number;
        rssi: number;
    }

    type baseDevice<TUnitCode extends number> = Device<TUnitCode>;

    export namespace RfyStandard
    {
        export type Device = baseDevice<UnitCode>;

        export enum UnitCode
        {
            Unit0 = 0x00,
            Unit1 = 0x01,
            Unit2 = 0x02,
            Unit3 = 0x03,
            Unit4 = 0x04,
        }
    }

    export namespace RfyExtended
    {
        export type Device = baseDevice<UnitCode>;

        export enum UnitCode
        {
            Unit0 = 0x00,
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
        }
    }

    export namespace Asa
    {
        export type Device = baseDevice<UnitCode>;

        export enum UnitCode
        {
            Unit1 = 0x01,
            Unit2 = 0x02,
            Unit3 = 0x03,
            Unit4 = 0x04,
            Unit5 = 0x05,
        }

        export enum Commands
        {
            Stop = 0x00,
            Up = 0x01,
            UpAndStop = 0x02,
            Down = 0x03,
            DownAndStop = 0x04,
            UpAndDown = 0x05,
            ListRemotes = 0x06,
            Program = 0x07,
            EraseCurrentRemote = 0x0D,
            EraseAllRemotes = 0x0E,
            EnableSunWindDetection = 0x13,
            DisableSunWindDetection = 0x14,
        }
    }
}

export enum Commands
{
    stop = Internal.Commands.stop,
    up = Internal.Commands.up,
    down = Internal.Commands.down,
    program = Internal.Commands.program,
    removeRemote = Internal.Commands.removeRemote,
    remoteRemotes = Internal.Commands.remoteRemotes,
    upShort = Internal.Commands.upShort,
    downShort = Internal.Commands.downShort,
    upLong = Internal.Commands.upLong,
    downLong = Internal.Commands.downLong,
    enableSunWindDetection = Internal.Commands.enableSunWindDetection,
    disableSunWindDetection = Internal.Commands.disableSunWindDetection,
};

export type Device =
    Internal.Asa.Device |
    Internal.RfyExtended.Device |
    Internal.RfyStandard.Device;

export function init()
{
    Protocol.register<Internal.RfyStandard.Device>('type', Type.RFY.Standard, [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'id3', type: 'uint8' },
        { name: 'unitCode', type: 'uint8' },
        { name: 'command', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);

    Protocol.register<Internal.RfyExtended.Device>('type', Type.RFY.Extended, [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'id3', type: 'uint8' },
        { name: 'unitCode', type: 'uint8' },
        { name: 'command', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);

    Protocol.register<Internal.Asa.Device>('type', Type.RFY.ASA, [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'id3', type: 'uint8' },
        { name: 'unitCode', type: 'uint8' },
        { name: 'command', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'rfu', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);
}