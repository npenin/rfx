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

export enum Commands
{
    reset = 0x00,
    status = 0x02,
    setMode = 0x03,
    save = 0x06,
    start = 0x07,
    select310 = 0x50,
    select315 = 0x51,
    select86800 = 0x55,
    select86800FSK = 0x56,
    select86830 = 0x57,
    select86830FSK = 0x58,
    select86835 = 0x59,
    select86835FSK = 0x5A,
    select86895 = 0x5B,
    select86830FSKPKT = 0x5C,
    select86835FSKPKT = 0x5D,
    select86840FSKPKT = 0x5E,
};

export enum Frequences
{
    RFXtrx315_310 = 0x50,
    RFXtrx315_315 = 0x51,
    RFXrec433 = 0x52,
    RFXtrx433 = 0x53,
    RFXtrx868_86800 = 0x55,
    RFXtrx868_86800FSK = 0x56,
    RFXtrx868_86830 = 0x57,
    RFXtrx868_86830FSK = 0x58,
    RFXtrx868_86835 = 0x59,
    RFXtrx868_86835FSK = 0x5A,
    RFXtrx868_86895 = 0x5B,
}

export enum EmitPower
{
    m18dBm = 0x00,
    m17dBm = 0x01,
    m16dBm = 0x02,
    m15dBm = 0x03,
    m14dBm = 0x04,
    m13dBm = 0x05,
    m12dBm = 0x06,
    m11dBm = 0x07,
    m10dBm = 0x08,
    m9dBm = 0x09,
    m8dBm = 0x0A,
    m7dBm = 0x0B,
    m6dBm = 0x0C,
    m5dBm = 0x0D,
    m4dBm = 0x0E,
    m3dBm = 0x0F,
    m2dBm = 0x10,
    m1dBm = 0x11,
    zerodBm = 0x12,
    p1dBm = 0x13,
    p2dBm = 0x14,
    p3dBm = 0x15,
    p4dBm = 0x16,
    p5dBm = 0x17,
    p6dBm = 0x18,
    p7dBm = 0x19,
    p8dBm = 0x1A,
    p9dBm = 0x1B,
    p10dBm = 0x1C,
    // p11dBm = 0x1D, //not allowed
    // p12dBm = 0x1E, //not allowed
    // p13dBm = 0x1F, //not allowed
}

export enum protocols_msg3
{
    AEBlyss = 0x01,
    Rubicson = 0x02,
    FineOffset_Viking = 0x04,
    Lighting4 = 0x08,
    RSL = 0x10,
    ByronSX = 0x20,
    Imagintronix_Opus = 0x40,
    DisplayRaw = 0x80,
}


export enum protocols_msg4
{
    Metrik = 0x01,
    ADLightwaveRF = 0x02,
    Hideki_UPM = 0x04,
    LaCrosse = 0x08,
    FS20_LegrandCAD = 0x10,
    ProGuard = 0x20,
    BlindsT0 = 0x40,
    BlindsT1_T2_T3_T4 = 0x80,
}
export enum protocols_msg5
{
    X10 = 0x01,
    ARC = 0x02,
    AC = 0x04,
    HomeEasyEU = 0x08,
    Meiantech = 0x10,
    OregonScientific = 0x20,
    ATI_cartelectronic = 0x40,
    Visonic = 0x80,
}
export enum protocols_msg6
{
    Keeloq = 0x01,
    HomeConfort = 0x02,
    // Hideki_UPM=0x04,
    // LaCrosse=0x08,
    // FS20_LegrandCAD=0x10,
    // ProGuard=0x20,
    // BlindsT0=0x40,
    // BlindsT1_T2_T3_T4=0x80,
}

export interface ModeCommand
{
    command: Commands;
    frequenceSelection: Frequences;
    emitPower: EmitPower;
    msg3: protocols_msg3;
    msg4: protocols_msg4;
    msg5: protocols_msg5;
    msg6: protocols_msg6;
    msg7: number;
    msg8: number;
    msg9: number;
}

export function init()
{
    Protocol.register<ModeCommand>('type', Type.INTERFACE_CONTROL.Mode, [
        { name: 'command', type: 'uint8' },
        { name: 'frequenceSelection', type: 'uint8' },
        { name: 'emitPower', type: 'uint8' },
        { name: 'msg3', type: 'uint8' },
        { name: 'msg4', type: 'uint8' },
        { name: 'msg5', type: 'uint8' },
        { name: 'msg6', type: 'uint8' },
        { name: 'msg7', type: 'uint8' },
        { name: 'msg8', type: 'uint8' },
        { name: 'msg9', type: 'uint8' },
    ]);
}