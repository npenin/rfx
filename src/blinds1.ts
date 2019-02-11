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
import { Protocol, Type } from '.'
import { FrameDescription } from '@domojs/protocol-parser';

export enum SubType
{
    BlindsT0 = 0x00,
    BlindsT1 = 0x01,
    BlindsT2 = 0x02,
    BlindsT3 = 0x03,
    BlindsT4 = 0x04,
    BlindsT5 = 0x05,
    BlindsT6 = 0x06,
    BlindsT7 = 0x07,
    BlindsT8 = 0x08,
    BlindsT9 = 0x09,
    BlindsT10 = 0x0A,
    BlindsT11 = 0x0B,
    BlindsT12 = 0x0C,
    BlindsT13 = 0x0D,
    BlindsT14 = 0x0E,
    BlindsT15 = 0x0F,
    BlindsT16 = 0x10,
};

export namespace Internal
{
    export enum Command
    {
        Open = 0x00,
        Close = 0x01,
        Stop = 0x02,
    }

    export enum UnitCode1To15StartingWithAll
    {
        AllUnits = 0x00,
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

    export enum UnitCode1To6
    {
        AllUnits = 0x00,
        Unit1 = 0x01,
        Unit2 = 0x02,
        Unit3 = 0x03,
        Unit4 = 0x04,
        Unit5 = 0x05,
        Unit6 = 0x06,
    }

    export interface Device<TUnitCode extends number, TCommand extends number>
    {
        id1: number;
        id2: number;
        id3: number;
        unitCode: TUnitCode;
        id4: number;
        command: TCommand,
        batteryLevel: number;
        rssi: number;
    }

    export namespace BlindsT0
    {
        export type Device = Internal.Device<UnitCode1To15StartingWithAll, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
            SetLimit = 0x04,
        }
    }

    export namespace BlindsT1
    {
        export type Device = Internal.Device<UnitCode1To15StartingWithAll, Command>

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
            SetLimit = 0x04,
        }

    }

    export namespace BlindsT2
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
        }
    }

    export namespace BlindsT3
    {
        export type Device = Internal.Device<UnitCode, Command>;

        export enum UnitCode
        {
            Unit1 = 0x00,
            Unit2 = 0x01,
            Unit3 = 0x02,
            Unit4 = 0x03,
            Unit5 = 0x04,
            Unit6 = 0x05,
            Unit7 = 0x06,
            Unit8 = 0x07,
            Unit9 = 0x08,
            Unit10 = 0x09,
            Unit11 = 0x0A,
            Unit12 = 0x0B,
            Unit13 = 0x0C,
            Unit14 = 0x0D,
            Unit15 = 0x0E,
            Unit16 = 0x0F,
            AllUnits = 0x10,
        }

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
        }
    }

    export namespace BlindsT4
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
            SetUpperLimit = 0x04,
            SetLowerLimit = 0x05,
            DeleteLimits = 0x06,
            ChangeDirection = 0x07,
        }
    }

    export namespace BlindsT5
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Down = 0x00,
            Up = 0x01,
            Stop = 0x02,
        }
    }

    export namespace BlindsT6
    {
        export type Device = Internal.Device<UnitCode1To15StartingWithAll, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Confirm = 0x03,
            Pair = 0x03,
        }
    }

    export namespace BlindsT7
    {
        export type Device = Internal.Device<UnitCode1To15StartingWithAll, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Confirm = 0x03,
            Pair = 0x03,
        }
    }

    export namespace BlindsT8
    {
        export type Device = Internal.Device<UnitCode, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
        }

        export enum UnitCode
        {
            Unit1 = 0x00,
            Unit2 = 0x01,
            Unit3 = 0x02,
            Unit4 = 0x03,
            Unit5 = 0x04,
            Unit6 = 0x05,
        }
    }

    export namespace BlindsT9
    {
        export type Device = Internal.Device<UnitCode1To6, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
            SetUpperLimit = 0x04,
            SetLowerLimit = 0x05,
            ChangeDirection = 0x06,
            IntermediatePositionA = 0x07,
            IntermediatePositionCenter = 0x08,
            IntermediatePositionB = 0x09,
            EraseCurrentChannel = 0x0A,
            EraseAllChannels = 0x0B,
        }
    }

    export namespace BlindsT10
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
            LearnMaster = 0x04,
            EraseCurrentChannel = 0x05,
            ChangeDirection = 0x06,
        }
    }

    export namespace BlindsT11
    {
        export type Device = Internal.Device<0, Command>;

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
        }
    }

    export namespace BlindsT12
    {
        export type Device = Internal.Device<UnitCode, Command>;

        export enum UnitCode
        {
            Unit1 = 0x00,
            Unit2 = 0x01,
            Unit3 = 0x02,
            Unit4 = 0x03,
            Unit5 = 0x04,
            Unit6 = 0x05,
            Unit7 = 0x06,
            Unit8 = 0x07,
            Unit9 = 0x08,
            Unit10 = 0x09,
            Unit11 = 0x0A,
            Unit12 = 0x0B,
            Unit13 = 0x0C,
            Unit14 = 0x0D,
            Unit15 = 0x0E,
            AllUnits = 0x0F,
        }

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Stop = 0x02,
            Pair = 0x03,
            Confirm = 0x03,
        }
    }

    export namespace BlindsT13
    {
        export type Device = Internal.Device<UnitCode, Command>;

        export enum UnitCode
        {
            AllUnits = 0x00,
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
            Unit65 = 0x41,
            Unit66 = 0x42,
            Unit67 = 0x43,
            Unit68 = 0x44,
            Unit69 = 0x45,
            Unit70 = 0x46,
            Unit71 = 0x47,
            Unit72 = 0x48,
            Unit73 = 0x49,
            Unit74 = 0x4A,
            Unit75 = 0x4B,
            Unit76 = 0x4C,
            Unit77 = 0x4D,
            Unit78 = 0x4E,
            Unit79 = 0x4F,
            Unit80 = 0x50,
            Unit81 = 0x51,
            Unit82 = 0x52,
            Unit83 = 0x53,
            Unit84 = 0x54,
            Unit85 = 0x55,
            Unit86 = 0x56,
            Unit87 = 0x57,
            Unit88 = 0x58,
            Unit89 = 0x59,
            Unit90 = 0x5A,
            Unit91 = 0x5B,
            Unit92 = 0x5C,
            Unit93 = 0x5D,
            Unit94 = 0x5E,
            Unit95 = 0x5F,
            Unit96 = 0x60,
            Unit97 = 0x61,
            Unit98 = 0x62,
            Unit99 = 0x63,
        }

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Pair = 0x03,
            Confirm = 0x03,
        }
    }

    export namespace BlindsT14
    {
        export type Device = Internal.Device<UnitCode1To15StartingWithAll, Command>

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Pair = 0x03,
            Confirm = 0x03,
        }
    }

    export namespace BlindsT15
    {
        ///RFU
        // export type Device = Blinds1.Device<UnitCode1To15StartingWithAll, Command>

        // export enum Command
        // {
        //     Open = 0x00,
        //     Close = 0x01,
        //     Pair = 0x03,
        //     Confirm = 0x03,
        // }
    }

    export namespace BlindsT16
    {
        export type Device = Internal.Device<UnitCode1To6, Command>

        export enum Command
        {
            Open = 0x00,
            Close = 0x01,
            Pair = 0x03,
            Confirm = 0x03,
            ChangeDirection = 0x05,
            EraseCurrentChannel = 0x04,
        }
    }

}
export function init()
{
    var frames: FrameDescription<Internal.Device<number, number>>[] = [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'id3', type: 'uint8' },
        { name: 'unitCode', type: 'uint8' },
        { name: 'id4', type: 'uint8' },
        { name: 'command', type: 'uint8' },
        { name: 'batteryLevel', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ];

    Protocol.register<Internal.BlindsT0.Device>('type', Type.BLINDS1.BlindsT0, frames)
    Protocol.register<Internal.BlindsT1.Device>('type', Type.BLINDS1.BlindsT1, frames)
    Protocol.register<Internal.BlindsT2.Device>('type', Type.BLINDS1.BlindsT2, frames)
    Protocol.register<Internal.BlindsT3.Device>('type', Type.BLINDS1.BlindsT3, frames)
    Protocol.register<Internal.BlindsT4.Device>('type', Type.BLINDS1.BlindsT4, frames)
    Protocol.register<Internal.BlindsT5.Device>('type', Type.BLINDS1.BlindsT5, frames)
    Protocol.register<Internal.BlindsT6.Device>('type', Type.BLINDS1.BlindsT6, frames)
    Protocol.register<Internal.BlindsT7.Device>('type', Type.BLINDS1.BlindsT7, frames)
    Protocol.register<Internal.BlindsT8.Device>('type', Type.BLINDS1.BlindsT8, frames)
    Protocol.register<Internal.BlindsT9.Device>('type', Type.BLINDS1.BlindsT9, frames)
    Protocol.register<Internal.BlindsT10.Device>('type', Type.BLINDS1.BlindsT10, frames)
    Protocol.register<Internal.BlindsT11.Device>('type', Type.BLINDS1.BlindsT11, frames)
    Protocol.register<Internal.BlindsT12.Device>('type', Type.BLINDS1.BlindsT12, frames)
    Protocol.register<Internal.BlindsT13.Device>('type', Type.BLINDS1.BlindsT13, frames)
    Protocol.register<Internal.BlindsT14.Device>('type', Type.BLINDS1.BlindsT14, frames)
    // Protocol.register<Blinds1.BlindsT15.Device>('type', Type.BLINDS1.BlindsT15, frames)
    Protocol.register<Internal.BlindsT16.Device>('type', Type.BLINDS1.BlindsT16, frames)
}
export type Device =
    Internal.BlindsT0.Device |
    Internal.BlindsT1.Device |
    Internal.BlindsT2.Device |
    Internal.BlindsT3.Device |
    Internal.BlindsT4.Device |
    Internal.BlindsT5.Device |
    Internal.BlindsT6.Device |
    Internal.BlindsT7.Device |
    Internal.BlindsT8.Device |
    Internal.BlindsT9.Device |
    Internal.BlindsT10.Device |
    Internal.BlindsT11.Device |
    Internal.BlindsT12.Device |
    Internal.BlindsT13.Device |
    Internal.BlindsT14.Device |
    // Blinds1.BlindsT15.Device |
    Internal.BlindsT16.Device;