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
    X10 = 0x00,
    ARC = 0x01,
    AB400 = 0x02,
    Waveman = 0x03,
    Chacon_EMW200 = 0x04,
    IMPULS = 0x05,
    RisingSun = 0x06,
    PhilipsSBC = 0x07,
    Energenie_ENER010 = 0x08,
    Energenie_5gang = 0x09,
    COCO_GDR22000R = 0x0A,
    HQ_COCO20 = 0x0B,
    Oase_Inscenio_FM_Master = 0x0C,
};

export enum HouseCode
{
    A = 0x41,
    B = 0x42,
    C = 0x43,
    D = 0x44,
    E = 0x45,
    F = 0x46,
    G = 0x47,
    H = 0x48,
    I = 0x49,
    J = 0x4A,
    K = 0x4B,
    L = 0x4C,
    M = 0x4D,
    N = 0x4E,
    O = 0x4F,
    P = 0x50,
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

export namespace Internal
{
    export var SubTypes = SubType;

    export interface Device<THouseCode extends number, TUnitCode extends number, TCommand extends number>
    {
        houseCode: THouseCode;
        unitCode: TUnitCode;
        command: TCommand;
        filler: number;
        rssi: number;
    }

    export namespace X10
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            Dim = 0x02,
            Bright = 0x03,
            AllOff = 0x05,
            AllOn = 0x06,
            Chime = 0x07,
            Illegal = 0xFF,
        }
    }



    export namespace AB400
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
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
            Unit17 = 0x11,
            Unit18 = 0x12,
            Unit19 = 0x13,
            Unit20 = 0x14,
            Unit21 = 0x15,
            Unit22 = 0x16,
            Unit23 = 0x17,
            Unit24 = 0x18,
            Unit25 = 0x19,
            Unit26 = 0x1A,
            Unit27 = 0x1B,
            Unit28 = 0x1C,
            Unit29 = 0x1D,
            Unit30 = 0x1E,
            Unit31 = 0x1F,
            Unit32 = 0x20,
            Unit33 = 0x21,
            Unit34 = 0x22,
            Unit35 = 0x23,
            Unit36 = 0x24,
            Unit37 = 0x25,
            Unit38 = 0x26,
            Unit39 = 0x27,
            Unit40 = 0x28,
            Unit41 = 0x29,
            Unit42 = 0x2A,
            Unit43 = 0x2B,
            Unit44 = 0x2C,
            Unit45 = 0x2D,
            Unit46 = 0x2E,
            Unit47 = 0x2F,
            Unit48 = 0x30,
            Unit49 = 0x31,
            Unit50 = 0x32,
            Unit51 = 0x33,
            Unit52 = 0x34,
            Unit53 = 0x35,
            Unit54 = 0x36,
            Unit55 = 0x37,
            Unit56 = 0x38,
            Unit57 = 0x39,
            Unit58 = 0x3A,
            Unit59 = 0x3B,
            Unit60 = 0x3C,
            Unit61 = 0x3D,
            Unit62 = 0x3E,
            Unit63 = 0x3F,
            Unit64 = 0x40,
        }
    }

    export namespace Waveman
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }

    export namespace IMPULS
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

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
            Unit17 = 0x11,
            Unit18 = 0x12,
            Unit19 = 0x13,
            Unit20 = 0x14,
            Unit21 = 0x15,
            Unit22 = 0x16,
            Unit23 = 0x17,
            Unit24 = 0x18,
            Unit25 = 0x19,
            Unit26 = 0x1A,
            Unit27 = 0x1B,
            Unit28 = 0x1C,
            Unit29 = 0x1D,
            Unit30 = 0x1E,
            Unit31 = 0x1F,
            Unit32 = 0x20,
            Unit33 = 0x21,
            Unit34 = 0x22,
            Unit35 = 0x23,
            Unit36 = 0x24,
            Unit37 = 0x25,
            Unit38 = 0x26,
            Unit39 = 0x27,
            Unit40 = 0x28,
            Unit41 = 0x29,
            Unit42 = 0x2A,
            Unit43 = 0x2B,
            Unit44 = 0x2C,
            Unit45 = 0x2D,
            Unit46 = 0x2E,
            Unit47 = 0x2F,
            Unit48 = 0x30,
            Unit49 = 0x31,
            Unit50 = 0x32,
            Unit51 = 0x33,
            Unit52 = 0x34,
            Unit53 = 0x35,
            Unit54 = 0x36,
            Unit55 = 0x37,
            Unit56 = 0x38,
            Unit57 = 0x39,
            Unit58 = 0x3A,
            Unit59 = 0x3B,
            Unit60 = 0x3C,
            Unit61 = 0x3D,
            Unit62 = 0x3E,
            Unit63 = 0x3F,
            Unit64 = 0x40,
        }

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }
    export namespace HQ
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

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
            Unit17 = 0x11,
            Unit18 = 0x12,
            Unit19 = 0x13,
            Unit20 = 0x14,
            Unit21 = 0x15,
            Unit22 = 0x16,
            Unit23 = 0x17,
            Unit24 = 0x18,
            Unit25 = 0x19,
            Unit26 = 0x1A,
            Unit27 = 0x1B,
            Unit28 = 0x1C,
            Unit29 = 0x1D,
            Unit30 = 0x1E,
            Unit31 = 0x1F,
            Unit32 = 0x20,
            Unit33 = 0x21,
            Unit34 = 0x22,
            Unit35 = 0x23,
            Unit36 = 0x24,
            Unit37 = 0x25,
            Unit38 = 0x26,
            Unit39 = 0x27,
            Unit40 = 0x28,
            Unit41 = 0x29,
            Unit42 = 0x2A,
            Unit43 = 0x2B,
            Unit44 = 0x2C,
            Unit45 = 0x2D,
            Unit46 = 0x2E,
            Unit47 = 0x2F,
            Unit48 = 0x30,
            Unit49 = 0x31,
            Unit50 = 0x32,
            Unit51 = 0x33,
            Unit52 = 0x34,
            Unit53 = 0x35,
            Unit54 = 0x36,
            Unit55 = 0x37,
            Unit56 = 0x38,
            Unit57 = 0x39,
            Unit58 = 0x3A,
            Unit59 = 0x3B,
            Unit60 = 0x3C,
            Unit61 = 0x3D,
            Unit62 = 0x3E,
            Unit63 = 0x3F,
            Unit64 = 0x40,
        }

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }
    export namespace Energenie5
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

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
        }

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }

    export namespace ARC
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            AllOff = 0x05,
            AllOn = 0x06,
        }
    }

    export namespace Philips
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            AllOff = 0x05,
            AllOn = 0x06,
        }
    }

    export namespace Energenie
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum UnitCode
        {
            Unit1 = 0x01,
            Unit2 = 0x02,
            Unit3 = 0x03,
            Unit4 = 0x04
        }

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            AllOff = 0x05,
            AllOn = 0x06,
        }
    }

    export namespace EMW200
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum HouseCode
        {
            A = 0x41,
            B = 0x42,
            C = 0x43,
        }

        export enum UnitCode
        {
            Unit1 = 0x01,
            Unit2 = 0x02,
            Unit3 = 0x03,
            Unit4 = 0x04,
        }

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }

    export namespace RisingSun
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum HouseCode
        {
            A = 0x41,
            B = 0x42,
            C = 0x43,
            D = 0x0B,
        }

        export enum UnitCode
        {
            Unit1 = 0x01,
            Unit2 = 0x02,
            Unit3 = 0x03,
            Unit4 = 0x04,
        }

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }
    export namespace COCO
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum HouseCode
        {
            A = 0x41,
            B = 0x42,
            C = 0x43,
            D = 0x0B,
        }

        export enum UnitCode
        {
            Unit1 = 0x01,
            Unit2 = 0x02,
            Unit3 = 0x03,
            Unit4 = 0x04,
        }

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }

    export namespace Oase
    {
        export type Device = Internal.Device<HouseCode, UnitCode, Command>;

        export enum UnitCode
        {
            Unit1 = 0x01,
            Unit2 = 0x02,
            Unit3 = 0x03,
        }

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            Dim = 0x02,
            Bright = 0x03,
            Program = 0x04,
        }
    }
}

export type Device =
    Internal.X10.Device |
    Internal.ARC.Device |
    Internal.AB400.Device |
    Internal.Waveman.Device |
    Internal.EMW200.Device |
    Internal.IMPULS.Device |
    Internal.RisingSun.Device |
    Internal.Philips.Device |
    Internal.Energenie.Device |
    Internal.Energenie5.Device |
    Internal.COCO.Device |
    Internal.HQ.Device |
    Internal.Oase.Device;

export function init()
{
    var frames: FrameDescription<Device>[] = [
        { name: 'houseCode', type: 'uint8' },
        { name: 'unitCode', type: 'uint8' },
        { name: 'command', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ];
    Protocol.register<Device>('type', Type.LIGHTING1.X10, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.ARC, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.AB400, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.Waveman, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.Chacon_EMW200, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.IMPULS, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.RisingSun, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.PhilipsSBC, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.Energenie_ENER010, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.Energenie_5gang, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.COCO_GDR22000R, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.HQ_COCO20, frames);
    Protocol.register<Device>('type', Type.LIGHTING1.Oase_Inscenio_FM_Master, frames);
}