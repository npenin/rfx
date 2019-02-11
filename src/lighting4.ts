import { FrameDescription } from "@domojs/protocol-parser";
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
    PT2262 = 0x00,
}

export interface Device
{
    command1: number;
    command2: number;
    command3: number;
    pulse: number;
    filler: number;
    rssi: number;
}

export function init()
{
    var frames: FrameDescription<Device>[] = [
        { name: 'command1', type: 'uint8' },
        { name: 'command2', type: 'uint8' },
        { name: 'command3', type: 'uint8' },
        { name: 'pulse', type: 'uint16' },
        { name: 'filler', type: 'uint4' },
        { name: 'rssi', type: 'uint4' },
    ];

    Protocol.register<Device>('type', Type.LIGHTING4.PT2262, frames);
}