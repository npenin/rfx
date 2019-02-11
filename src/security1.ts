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
    X10DoorSensor = 0x00,
    X10MotionSensor = 0x01,
    X10Remote = 0x02,
    KD101 = 0x03,
    VisonicPowerCodeDoorSensor = 0x04,
    VisonicPowerCodeMotionSensor = 0x05,
    VisonicCodeSecure = 0x06,
    VisonicPowerCodeDoorSensorAux = 0x07,
    Meiantech = 0x08,
    Atlantic = 0x08,
    SA30 = 0x09,
    SA33 = 0x09,
    RM174RF = 0x0A,
};

export enum Command
{
    Open = 0x00,
    Close = 0x01,
    Stop = 0x02,
    Program = 0x03,
}

export namespace Security1
{
    export interface Device<TStatus extends number>
    {
        id1: number;
        id2: number;
        id3: number;
        status: TStatus;
        batteryLevel: number;
        rssi: number;
    }

    export enum Status
    {
        Normal = 0x00,
        NormalDelayed = 0x01,
        Alarm = 0x02,
        AlarmDelayed = 0x03,
        Motion = 0x04,
        NoMotion = 0x05,
        Panic = 0x06,
        EndPanic = 0x07,
        IR = 0x08,
        ArmAway = 0x09,
        ArmAwayDelayed = 0x0A,
        ArmHome = 0x0B,
        ArmHomeDelayed = 0x0C,
        Disarm = 0x0D,
        Light1Off = 0x10,
        Light1On = 0x11,
        Light2Off = 0x12,
        Light2On = 0x13,
        DarkDetected = 0x14,
        LightDetected = 0x15,
        BatlowSD18 = 0x16,
        BatlowCO18 = 0x16,
        PairKD101 = 0x17,
        PairSA30 = 0x17,
        PairRM174RF = 0x17,
        NormalTamper = 0x80,
        NormalDelayedTampered = 0x81,
        AlarmTamper = 0x82,
        AlarmDelayedTamper = 0x83,
        MotionTamper = 0x84,
        NoMotionTamper = 0x85,
    }
}

export namespace X10DoorSensor
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Normal = Security1.Status.Normal,
        NormalDelayed = Security1.Status.NormalDelayed,
        Alarm = Security1.Status.Alarm,
        AlarmDelayed = Security1.Status.AlarmDelayed,
        NormalTamper = Security1.Status.NormalTamper,
        NormalDelayedTampered = Security1.Status.NormalDelayedTampered,
        AlarmTamper = Security1.Status.AlarmTamper,
        AlarmDelayedTamper = Security1.Status.AlarmDelayedTamper,
    }
}
export namespace X10MotionSensor
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Motion = Security1.Status.Motion,
        NoMotion = Security1.Status.NoMotion,
        MotionTamper = Security1.Status.MotionTamper,
        NoMotionTamper = Security1.Status.NoMotionTamper,
    }
}
export namespace X10Remote
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Panic = Security1.Status.Panic,
        EndPanic = Security1.Status.EndPanic,
        ArmAway = Security1.Status.ArmAway,
        ArmAwayDelayed = Security1.Status.ArmAwayDelayed,
        ArmHome = Security1.Status.ArmHome,
        ArmHomeDelayed = Security1.Status.ArmHomeDelayed,
        Disarm = Security1.Status.Disarm,
        Light1Off = Security1.Status.Light1Off,
        Light1On = Security1.Status.Light1On,
        Light2Off = Security1.Status.Light2Off,
        Light2On = Security1.Status.Light2On,
    }

}
export namespace KD101
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Panic = Security1.Status.Panic,
        Pair = Security1.Status.PairKD101,
    }
}
export namespace VisonicPowerCodeDoorSensor
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Normal = Security1.Status.Normal,
        Alarm = Security1.Status.Alarm,
        NormalTamper = Security1.Status.NormalTamper,
        AlarmTamper = Security1.Status.AlarmTamper,
    }
}
export namespace VisonicPowerCodeMotionSensor
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Motion = Security1.Status.Motion,
        NoMotion = Security1.Status.NoMotion,
        MotionTamper = Security1.Status.MotionTamper,
        NoMotionTamper = Security1.Status.NoMotionTamper,
    }
}
export namespace VisonicCodeSecure
{
    export type Device = Security1.Device<0>;

}
export namespace VisonicPowerCodeDoorSensorAux
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Normal = Security1.Status.Normal,
        Alarm = Security1.Status.Alarm,
        NormalTamper = Security1.Status.NormalTamper,
        AlarmTamper = Security1.Status.AlarmTamper,
    }
}
export namespace Meiantech
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Panic = Security1.Status.Panic,
        IR = Security1.Status.IR,
        ArmAway = Security1.Status.ArmAway,
        ArmHome = Security1.Status.ArmHome,
        Disarm = Security1.Status.Disarm,
    }
}
export namespace Atlantic
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Panic = Security1.Status.Panic,
        IR = Security1.Status.IR,
        ArmAway = Security1.Status.ArmAway,
        ArmHome = Security1.Status.ArmHome,
        Disarm = Security1.Status.Disarm,
    }
}
export namespace SA30
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Panic = Security1.Status.Panic,
        Pair = Security1.Status.PairSA30,
    }
}
export namespace SA33
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Panic = Security1.Status.Panic,
        Pair = Security1.Status.PairSA30,
    }
}

export namespace RM174RF
{
    export type Device = Security1.Device<Status>;

    export enum Status
    {
        Panic = Security1.Status.Panic,
        Pair = Security1.Status.PairRM174RF,
    }
}