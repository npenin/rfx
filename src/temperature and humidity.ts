import { Type, Protocol } from ".";
import { FrameDescription } from "@domojs/protocol-parser";

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
    TH1 = 0x01,
    THGN122 = 0x01,
    THGN123 = 0x01,
    THGN132 = 0x01,
    THGR122 = 0x01,
    THGR228 = 0x01,
    THGR238 = 0x01,
    THGR268 = 0x01,
    TH2 = 0x02,
    THGR810 = 0x02,
    THGR800 = 0x02,
    THGR801 = 0x02,
    TH3 = 0x03,
    RTGR328 = 0x03,
    RTGR318 = 0x03,
    RTGR368 = 0x03,
    RTGR383 = 0x03,
    TH4 = 0x04,
    THGR328 = 0x04,
    TH5 = 0x05,
    WTGR800 = 0x05,
    TH6 = 0x06,
    THGR918 = 0x06,
    THGR928 = 0x06,
    THGRN228 = 0x06,
    THGN500 = 0x06,
    TH7 = 0x07,
    TFA_TS34C = 0x07,
    Cresta = 0x07,
    HoneywellTS33C = 0x07,
    TH8 = 0x08,
    WT260 = 0x08,
    WT260H = 0x08,
    WT440H = 0x08,
    WT450 = 0x08,
    WT450H = 0x08,
    TH9 = 0x09,
    Viking02035 = 0x09,
    Viking02038 = 0x09,
    ProoveTSS320 = 0x09,
    Proove311501 = 0x09,
    TH10 = 0x0A,
    Rubicson = 0x0A,
    IW008T = 0x0A,
    TX95 = 0x0A,
    Xiron_EN6 = 0x0A,
    WH5 = 0x0A,
    TH11 = 0x0B,
    WEW109 = 0x0B,
    TH12 = 0x0C,
    ImagintronixOpusXT300SoilSensor = 0x0C,
    TH13 = 0x0D,
    AlectoWS1700 = 0x0D,
    TH14 = 0x0E,
    AlectoWS3500 = 0x0E,
    AlectoWS4500 = 0x0E,
    AuriolH13726 = 0x0E,
    HamaEWS1500 = 0x0E,
    MeteoscanW155 = 0x0E,
    MeteoscanW160 = 0x0E,
    VentusWS155 = 0x0E,

};

export namespace TemperatureHumidity
{
    export interface Device
    {
        id: number;
        sign: boolean;
        temperature: number;
        humidity: number;
        humidityStatus: number;
        batteryLevel: number;
        rssi: number;
    }

}

export type Device = TemperatureHumidity.Device;


var frames: FrameDescription<Device>[] = [
    { name: 'id', type: 'uint16' },
    { name: 'sign', type: 'uint8' },
    { name: 'temperature', type: 'uint8' },
    { name: 'humidity', type: 'uint8' },
    { name: 'humidityStatus', type: 'uint8' },
    { name: 'batteryLevel', type: 'uint4' },
    { name: 'rssi', type: 'uint4' },
];

export function init()
{
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH1, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH2, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH3, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH4, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH5, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH6, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH7, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH8, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH9, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH10, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH11, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH12, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH13, frames);
    Protocol.register('type', Type.TEMPERATURE_HUMIDITY.TH14, frames);
}