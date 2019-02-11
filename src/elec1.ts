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


export enum SubType
{
    CM113 = 0x01,
    Electrisave = 0x01,
    CentaMeter = 0x01,
};

export enum Command
{

}

export enum HouseCode
{
}

export namespace Elec1
{
    export interface Device
    {
        sensorId: number;
        count: number;
        channel1: number;
        channel2: number;
        channel3: number;
        batteryLevel: number;
        rssi: number;
    }
}

export type Device = Elec1.Device;

export function init()
{
    Protocol.register<Elec1.Device>('type', Type.CURRENT_ENERGY.CM113, [
        { name: 'sensorId', type: 'uint16' },
        { name: 'count', type: 'uint8' },
        { name: 'channel1', type: 'uint16' },
        { name: 'channel2', type: 'uint16' },
        { name: 'channel3', type: 'uint16' },
        { name: 'batteryLevel', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ]);
}