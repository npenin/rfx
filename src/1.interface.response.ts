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
import { Protocol, Type, Message } from ".";
import { Frequences, protocols_msg3, protocols_msg4, protocols_msg5, protocols_msg6 } from './0.interface.mode'

export enum SubType
{
    mode = 0x00,
    unknownRTSRemote = 0x01,
    noExtendedHardwarePresent = 0x02,
    listRFYRemotes = 0x03,
    listASARemotes = 0x04,
    start = 0x07,
    unknown = 0xff,
};

export enum FirmwareType
{
    Type1_RFXrec = 0x00,
    Type1 = 0x01,
    Type2 = 0x02,
    Ext = 0x03,
    Ext2 = 0x04,
}

export interface ModeResponse
{
    command: 2;
    transceiverType: Frequences;
    firmwareVersion: number;
    emitPower: number;
    msg3: protocols_msg3;
    msg4: protocols_msg4;
    msg5: protocols_msg5;
    msg6: protocols_msg6;
    hardwareMajorVersion: number;
    hardwareMinorVersion: number;
    firmwareType: FirmwareType;
    noiseLevel: number;
    filler: number[];
}

export interface ListRFYRemote
{
    command: number;
    location: number;
    id1: number;
    id2: number;
    id3: number;
    unitNumber: number;
    randomCode: number;
    rollingCodeHigh: number;
    rollingCodeLow: number;
    filler: number[];
}

export interface CheckRFXCOMDevice
{
    command: 7;
    copyright: string;
}

export interface Response
{
    ack: ResponseAck;
}

export enum ResponseAck
{
    // transmit OK  
    ACK = 0x00,
    // but transmit started after 3 seconds delay anyway with RF receive data  
    ACKDelayed = 0x01,
    // transmitter did not lock on the requested transmit frequency  
    NAKFrequency = 0x02,
    // AC address zero in id1-id4 not allowed 
    NAK = 0x03,
}

export function init()
{
    Protocol.register<ModeResponse>('type', Type.INTERFACE_MESSAGE.mode, [
        { name: 'command', type: 'uint8' },
        { name: 'transceiverType', type: 'uint8' },
        { name: 'firmwareVersion', type: 'uint8' },
        { name: 'msg3', type: 'uint8' },
        { name: 'msg4', type: 'uint8' },
        { name: 'msg5', type: 'uint8' },
        { name: 'msg6', type: 'uint8' },
        { name: 'hardwareMajorVersion', type: 'uint8' },
        { name: 'hardwareMinorVersion', type: 'uint8' },
        { name: 'emitPower', type: 'uint8' },
        { name: 'firmwareType', type: 'uint8' },
        { name: 'noiseLevel', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
    ]);

    Protocol.register<ListRFYRemote>('type', Type.INTERFACE_MESSAGE.listRFYRemotes, [
        { name: 'command', type: 'uint8' },
        { name: 'location', type: 'uint8' },
        { name: 'id1', type: 'uint8' },
        { name: 'id2', type: 'uint8' },
        { name: 'id3', type: 'uint8' },
        { name: 'unitNumber', type: 'uint8' },
        { name: 'randomCode', type: 'uint8' },
        { name: 'rollingCodeHigh', type: 'uint8' },
        { name: 'rollingCodeLow', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
        { name: 'filler', type: 'uint8' },
    ]);

    Protocol.register<CheckRFXCOMDevice>('type', Type.INTERFACE_MESSAGE.start, [
        { name: 'command', type: 'uint8' },
        { name: 'copyright', type: 'string', length: -16 },
    ]);

    Protocol.register<Response>('type', Type.TRANSMITTER_MESSAGE.Response, [
        { name: 'ack', type: 'uint8' },
    ]);
    Protocol.register<Response>('type', Type.TRANSMITTER_MESSAGE.Error, [
        { name: 'ack', type: 'uint8' },
    ]);
}