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
import { Type, Protocol } from ".";
import { FrameDescription } from "@domojs/protocol-parser";

export enum SubType
{
    LightwaveRF = 0x00,
    Siemens = 0x00,
    EMW100GAO = 0x01,
    Everflourish = 0x01,
    BBSB = 0x02,
    MDRemote106LedDimmer = 0x03,
    ConradRSL2 = 0x04,
    OTIO = 0x04,
    LivoloDimmer = 0x05,
    RGB_TRC02_2batt = 0x06,
    AokeRelay = 0x07,
    RGB_TRC02_3batt = 0x08,
    Eurodomest = 0x09,
    LivoloAppliance = 0x0A,
    RGB432W = 0x0B,
    MDRemote107LedDimmer = 0x0C,
    LegrandCAD = 0x0D,
    Avantek = 0x0E,
    FA500 = 0x0F,
    PROMax = 0x0F,
    MDRemote108LedDimmer = 0x10,
    Kangtai = 0x11,
    Cotech = 0x11,
};

export enum UnitCodeAtoE
{
    A = 0x01,
    B = 0x02,
    C = 0x03,
    D = 0x04,
    E = 0x05,
}

export enum UnitCode1To16
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

export enum UnitCode1To30
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
}

export enum UnitCode1To10
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

export enum UnitCode1To4
{
    Unit1 = 0x01,
    Unit2 = 0x02,
    Unit3 = 0x03,
    Unit4 = 0x04,
}

export enum UnitCode1To6
{
    Unit1 = 0x01,
    Unit2 = 0x02,
    Unit3 = 0x03,
    Unit4 = 0x04,
    Unit5 = 0x05,
    Unit6 = 0x06,
}

export namespace Internal
{
    export interface Device<TUnitCode extends number, TCommand extends number>
    {
        id1: number;
        id2: number;
        id3: number;
        unitCode: TUnitCode;
        command: TCommand;
        level: number;
        filler: number;
        rssi: number;
    }

    export namespace AD
    {
        export type Device = Internal.Device<UnitCode1To16, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            GroupOff = 0x00,
            Mood1 = 0x03,
            Mood2 = 0x04,
            Mood3 = 0x05,
            Mood4 = 0x06,
            Mood5 = 0x07,
            Unlock = 0x0A,
            Lock = 0x0B,
            AllLock = 0x0C,
            Close = 0x0D,
            Stop = 0x0E,
            Open = 0x0F,
            SetLevel = 0x10,
            ColourPalette = 0x11,
            ColourTone = 0x12,
            ColourCycle = 0x13,

        }
    }

    export var LightwaveRF = AD;
    export var Siemens = AD;

    export namespace ConradRSL2
    {
        export type Device = Internal.Device<UnitCode1To16, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            GroupOff = 0x02,
            GroupOn = 0x03,
        }
    }

    export var OTIO = ConradRSL2;

    export namespace EMW100GAO
    {
        export type Device = Internal.Device<UnitCode1To4, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            Learn = 0x02,
        }
    }

    export var Everflourish = EMW100GAO;

    export namespace BBSB
    {
        export type Device = Internal.Device<UnitCode1To4, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            GroupOff = 0x02,
            GroupOn = 0x03,
        }
    }

    export namespace Eurodomest
    {
        export type Device = Internal.Device<UnitCode1To4, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            GroupOff = 0x02,
            GroupOn = 0x03,
        }
    }

    export namespace Avantek
    {
        export type Device = Internal.Device<UnitCodeAtoE, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            GroupOff = 0x02,
            GroupOn = 0x03,
        }
    }

    export namespace Kangtai
    {
        export type Device = Internal.Device<UnitCode1To30, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            GroupOff = 0x02,
            GroupOn = 0x03,
        }
    }

    export namespace Aoke
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
        }
    }

    export namespace IT
    {
        export type Device = Internal.Device<UnitCode1To4, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            GroupOff = 0x02,
            GroupOn = 0x03,
            SetLevel = 0x10,
        }
    }

    export namespace MDRemote106LedDimmer
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Power = 0x00,
            Light = 0x01,
            Bright = 0x02,
            Dim = 0x03,
            Level100 = 0x04,
            Level50 = 0x05,
            Level25 = 0x06,
            ModePlus = 0x07,
            SpeedMinus = 0x08,
            SpeedPlus = 0x09,
            ModeMinus = 0x0A,
        }
    }

    export namespace MDRemote107LedDimmer
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Power = 0x00,
            Bright = 0x01,
            Dim = 0x02,
            Level100 = 0x03,
            Level80 = 0x04,
            Level60 = 0x05,
            Level40 = 0x06,
            Level20 = 0x07,
            Level10 = 0x08,
        }
    }

    export namespace MDRemote108LedDimmer
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Power = 0x00,
            Light = 0x01,
            Bright = 0x02,
            Dim = 0x03,
            Level100 = 0x04,
            Level50 = 0x05,
            Level25 = 0x06,
            ModePlus = 0x07,
            SpeedMinus = 0x08,
            SpeedPlus = 0x09,
            ModeMinus = 0x0A,
        }
    }

    export namespace TRC02_2batt
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            Bright = 0x02,
            Dim = 0x03,
            ColorPlus = 0x04,
            ColorMinus = 0x05,
            Color1 = 0x06,
            Color2 = 0x07,
            Color3 = 0x08,
            Color4 = 0x09,
            Color5 = 0x0A,
            Color6 = 0x0B,
            Color7 = 0x0C,
            Color8 = 0x0D,
            Color9 = 0x0E,
            Color10 = 0x0F,
            Color11 = 0x10,
            Color12 = 0x11,
            Color13 = 0x12,
            Color14 = 0x13,
            Color15 = 0x14,
            Color16 = 0x15,
            Color17 = 0x16,
            Color18 = 0x17,
            Color19 = 0x18,
            Color20 = 0x19,
            Color21 = 0x1A,
            Color22 = 0x1B,
            Color23 = 0x1C,
            Color24 = 0x1D,
            Color25 = 0x1E,
            Color26 = 0x1F,
            Color27 = 0x20,
            Color28 = 0x21,
            Color29 = 0x22,
            Color30 = 0x23,
            Color31 = 0x24,
            Color32 = 0x25,
            Color33 = 0x26,
            Color34 = 0x27,
            Color35 = 0x28,
            Color36 = 0x29,
            Color37 = 0x2A,
            Color38 = 0x2B,
            Color39 = 0x2C,
            Color40 = 0x2D,
            Color41 = 0x2E,
            Color42 = 0x2F,
            Color43 = 0x30,
            Color44 = 0x31,
            Color45 = 0x32,
            Color46 = 0x33,
            Color47 = 0x34,
            Color48 = 0x35,
            Color49 = 0x36,
            Color50 = 0x37,
            Color51 = 0x38,
            Color52 = 0x39,
            Color53 = 0x3A,
            Color54 = 0x3B,
            Color55 = 0x3C,
            Color56 = 0x3D,
            Color57 = 0x3E,
            Color58 = 0x3F,
            Color59 = 0x40,
            Color60 = 0x41,
            Color61 = 0x42,
            Color62 = 0x43,
            Color63 = 0x44,
            Color64 = 0x45,
            Color65 = 0x46,
            Color66 = 0x47,
            Color67 = 0x48,
            Color68 = 0x49,
            Color69 = 0x4A,
            Color70 = 0x4B,
            Color71 = 0x4C,
            Color72 = 0x4D,
            Color73 = 0x4E,
            Color74 = 0x4F,
            Color75 = 0x50,
            Color76 = 0x51,
            Color77 = 0x52,
            Color78 = 0x53,
            Color79 = 0x54,
            Color80 = 0x55,
            Color81 = 0x56,
            Color82 = 0x57,
            Color83 = 0x58,
            Color84 = 0x59,
            Color85 = 0x5A,
            Color86 = 0x5B,
            Color87 = 0x5C,
            Color88 = 0x5D,
            Color89 = 0x5E,
            Color90 = 0x5F,
            Color91 = 0x60,
            Color92 = 0x61,
            Color93 = 0x62,
            Color94 = 0x63,
            Color95 = 0x64,
            Color96 = 0x65,
            Color97 = 0x66,
            Color98 = 0x67,
            Color99 = 0x68,
            Color100 = 0x69,
            Color101 = 0x6A,
            Color102 = 0x6B,
            Color103 = 0x6C,
            Color104 = 0x6D,
            Color105 = 0x6E,
            Color106 = 0x6F,
            Color107 = 0x70,
            Color108 = 0x71,
            Color109 = 0x72,
            Color110 = 0x73,
            Color111 = 0x74,
            Color112 = 0x75,
            Color113 = 0x76,
            Color114 = 0x77,
            Color115 = 0x78,
            Color116 = 0x79,
            Color117 = 0x7A,
            Color118 = 0x7B,
            Color119 = 0x7C,
            Color120 = 0x7D,
            Color121 = 0x7E,
            Color122 = 0x7F,
            Color123 = 0x80,
            Color124 = 0x81,
            Color125 = 0x82,
            Color126 = 0x83,
            Color127 = 0x84,
        }
    }

    export namespace TRC02_3batt
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            Bright = 0x02,
            Dim = 0x03,
            ColorPlus = 0x04,
            ColorMinus = 0x05,
            Color1 = 0x06,
            Color2 = 0x07,
            Color3 = 0x08,
            Color4 = 0x09,
            Color5 = 0x0A,
            Color6 = 0x0B,
            Color7 = 0x0C,
            Color8 = 0x0D,
            Color9 = 0x0E,
            Color10 = 0x0F,
            Color11 = 0x10,
            Color12 = 0x11,
            Color13 = 0x12,
            Color14 = 0x13,
            Color15 = 0x14,
            Color16 = 0x15,
            Color17 = 0x16,
            Color18 = 0x17,
            Color19 = 0x18,
            Color20 = 0x19,
            Color21 = 0x1A,
            Color22 = 0x1B,
            Color23 = 0x1C,
            Color24 = 0x1D,
            Color25 = 0x1E,
            Color26 = 0x1F,
            Color27 = 0x20,
            Color28 = 0x21,
            Color29 = 0x22,
            Color30 = 0x23,
            Color31 = 0x24,
            Color32 = 0x25,
            Color33 = 0x26,
            Color34 = 0x27,
            Color35 = 0x28,
            Color36 = 0x29,
            Color37 = 0x2A,
            Color38 = 0x2B,
            Color39 = 0x2C,
            Color40 = 0x2D,
            Color41 = 0x2E,
            Color42 = 0x2F,
            Color43 = 0x30,
            Color44 = 0x31,
            Color45 = 0x32,
            Color46 = 0x33,
            Color47 = 0x34,
            Color48 = 0x35,
            Color49 = 0x36,
            Color50 = 0x37,
            Color51 = 0x38,
            Color52 = 0x39,
            Color53 = 0x3A,
            Color54 = 0x3B,
            Color55 = 0x3C,
            Color56 = 0x3D,
            Color57 = 0x3E,
            Color58 = 0x3F,
            Color59 = 0x40,
            Color60 = 0x41,
            Color61 = 0x42,
            Color62 = 0x43,
        }
    }

    export namespace RGB432W
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Off = 0x00,
            On = 0x01,
            Bright = 0x02,
            Dim = 0x03,
            ColorPlus = 0x04,
            ColorMinus = 0x05,
            Color1 = 0x06,
            Color2 = 0x07,
            Color3 = 0x08,
            Color4 = 0x09,
            Color5 = 0x0A,
            Color6 = 0x0B,
            Color7 = 0x0C,
            Color8 = 0x0D,
            Color9 = 0x0E,
            Color10 = 0x0F,
            Color11 = 0x10,
            Color12 = 0x11,
            Color13 = 0x12,
            Color14 = 0x13,
            Color15 = 0x14,
            Color16 = 0x15,
            Color17 = 0x16,
            Color18 = 0x17,
            Color19 = 0x18,
            Color20 = 0x19,
            Color21 = 0x1A,
            Color22 = 0x1B,
            Color23 = 0x1C,
            Color24 = 0x1D,
            Color25 = 0x1E,
            Color26 = 0x1F,
            Color27 = 0x20,
            Color28 = 0x21,
            Color29 = 0x22,
            Color30 = 0x23,
            Color31 = 0x24,
            Color32 = 0x25,
            Color33 = 0x26,
            Color34 = 0x27,
            Color35 = 0x28,
            Color36 = 0x29,
            Color37 = 0x2A,
            Color38 = 0x2B,
            Color39 = 0x2C,
            Color40 = 0x2D,
            Color41 = 0x2E,
            Color42 = 0x2F,
            Color43 = 0x30,
            Color44 = 0x31,
            Color45 = 0x32,
            Color46 = 0x33,
            Color47 = 0x34,
            Color48 = 0x35,
            Color49 = 0x36,
            Color50 = 0x37,
            Color51 = 0x38,
            Color52 = 0x39,
            Color53 = 0x3A,
            Color54 = 0x3B,
            Color55 = 0x3C,
            Color56 = 0x3D,
            Color57 = 0x3E,
            Color58 = 0x3F,
            Color59 = 0x40,
            Color60 = 0x41,
            Color61 = 0x42,
            Color62 = 0x43,
            Color63 = 0x44,
            Color64 = 0x45,
            Color65 = 0x46,
            Color66 = 0x47,
            Color67 = 0x48,
            Color68 = 0x49,
            Color69 = 0x4A,
            Color70 = 0x4B,
            Color71 = 0x4C,
            Color72 = 0x4D,
            Color73 = 0x4E,
            Color74 = 0x4F,
            Color75 = 0x50,
            Color76 = 0x51,
            Color77 = 0x52,
            Color78 = 0x53,
            Color79 = 0x54,
            Color80 = 0x55,
            Color81 = 0x56,
            Color82 = 0x57,
            Color83 = 0x58,
            Color84 = 0x59,
            Color85 = 0x5A,
            Color86 = 0x5B,
            Color87 = 0x5C,
            Color88 = 0x5D,
            Color89 = 0x5E,
            Color90 = 0x5F,
            Color91 = 0x60,
            Color92 = 0x61,
            Color93 = 0x62,
            Color94 = 0x63,
            Color95 = 0x64,
            Color96 = 0x65,
            Color97 = 0x66,
            Color98 = 0x67,
            Color99 = 0x68,
            Color100 = 0x69,
            Color101 = 0x6A,
            Color102 = 0x6B,
            Color103 = 0x6C,
            Color104 = 0x6D,
            Color105 = 0x6E,
            Color106 = 0x6F,
            Color107 = 0x70,
            Color108 = 0x71,
            Color109 = 0x72,
            Color110 = 0x73,
            Color111 = 0x74,
            Color112 = 0x75,
            Color113 = 0x76,
            Color114 = 0x77,
            Color115 = 0x78,
            Color116 = 0x79,
            Color117 = 0x7A,
            Color118 = 0x7B,
            Color119 = 0x7C,
            Color120 = 0x7D,
            Color121 = 0x7E,
            Color122 = 0x7F,
            Color123 = 0x80,
            Color124 = 0x81,
            Color125 = 0x82,
            Color126 = 0x83,
            Color127 = 0x84,
        }
    }

    export namespace LivoloDimmer
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            GroupOff = 0x00,
            Toggle = 0x01,
            DimPlus = 0x02,
            DimMinus = 0x03,
        }
    }

    export namespace LivoloAppliance
    {
        export type Device = Internal.Device<UnitCode1To10, Command>;

        export enum Command
        {
            GroupOff = 0x00,
            Toggle = 0x01,
            DimPlus = 0x02,
            DimMinus = 0x03,
            Scene1 = 0x04,
            Scene2 = 0x05,
            DimPlusRoom2 = 0x06,
            DimMinusRoom2 = 0x07,
            Scene1Room2 = 0x08,
            Scene2Room2 = 0x09,
        }
    }

    export namespace Legrand
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Toggle = 0x00,
        }
    }
}

export type Device =
    Internal.AD.Device |
    Internal.EMW100GAO.Device |
    Internal.BBSB.Device |
    Internal.MDRemote106LedDimmer.Device |
    Internal.ConradRSL2.Device |
    Internal.LivoloDimmer.Device |
    Internal.TRC02_2batt.Device |
    Internal.Aoke.Device |
    Internal.TRC02_3batt.Device |
    Internal.Eurodomest.Device |
    Internal.LivoloAppliance.Device |
    Internal.RGB432W.Device |
    Internal.MDRemote107LedDimmer.Device |
    Internal.Legrand.Device |
    Internal.Avantek.Device |
    Internal.IT.Device |
    Internal.MDRemote108LedDimmer.Device |
    Internal.Kangtai.Device;

export function init()
{
    var frames: FrameDescription<Device>[] = [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'id3', type: 'uint8' },
        { name: 'unitCode', type: 'uint8' },
        { name: 'command', type: 'uint8' },
        { name: 'level', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ];

    Protocol.register<Device>('type', Type.LIGHTING5.LightwaveRF, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.EMW100GAO, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.BBSB, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.MDRemote106LedDimmer, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.ConradRSL2, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.LivoloDimmer, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.RGB_TRC02_2batt, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.AokeRelay, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.RGB_TRC02_3batt, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.Eurodomest, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.LivoloAppliance, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.RGB432W, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.MDRemote107LedDimmer, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.LegrandCAD, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.Avantek, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.FA500, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.MDRemote108LedDimmer, frames);
    Protocol.register<Device>('type', Type.LIGHTING5.Kangtai, frames);
}