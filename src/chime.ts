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
    ByronSX = 0x00,
    ByronMP001 = 0x01,
    SelectPlus = 0x02,
    Envivo = 0x04,
};

export namespace Internal
{
    export class Device<TSound extends number>
    {
        public id1: number;
        public id2: number;
        public sound: TSound;
        public filler: number;
        public rssi: number;
    }

    export namespace ByronSX
    {
        export enum Sound
        {
            Tubular3Notes1 = 0x01,
            BigBen1 = 0x03,
            Tubular2Notes1 = 0x05,
            Solo1 = 0x09,
            Tubular3Notes2 = 0x0D,
            BigBen2 = 0x0E,
            Tubular2Notes2 = 0x06,
            Solo2 = 0x02,
        }

        export type Device = Internal.Device<Sound>;
    }

    export namespace ByronMP001
    {
        export enum Sound
        {
            Default = 0x54
        }

        export type Device = Internal.Device<Sound>;
    }

    export namespace SelectPlus
    {
        export type Device = Internal.Device<number>;
    }

    export namespace Envivo
    {
        export type Device = Internal.Device<number>;
    }
}
export function init()
{
    Protocol.register<Internal.ByronSX.Device>('type', Type.CHIME.ByronSX, [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'sound', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);

    Protocol.register<Internal.ByronMP001.Device>('type', Type.CHIME.ByronMP001, [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'sound', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);
    Protocol.register<Internal.SelectPlus.Device>('type', Type.CHIME.SelectPlus, [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'sound', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);
    Protocol.register<Internal.Envivo.Device>('type', Type.CHIME.Envivo, [
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'sound', type: 'uint8' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);
}
export type Device =
    Internal.ByronSX.Device |
    Internal.ByronMP001.Device |
    Internal.SelectPlus.Device |
    Internal.Envivo.Device;