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
    GiraRemote = 0x00,
    InstaRemote = 0x00,
}

export enum GroupCode
{
    A = 0x41,
    B = 0x42,
    C = 0x43,
}

export namespace Gira
{
    export enum Command
    {
        ChannelMinus = 0x00,
        ChannelPlus = 0x01,
        AllOff_Gira = 0x02,
        AllOn_Gira = 0x03,
        Scene_Gira = 0x04,
        MasterMinus_Gira = 0x05,
        MasterPlus_Gira = 0x06,
    }

    export enum CommandTime
    {
        OnOff = 0x00,
        LongPress = 0x01,
        VeryLongPress1_25 = 0x02,
        VeryLongPress1_50 = 0x03,
        VeryLongPress1_75 = 0x04,
        VeryLongPress2_00 = 0x05,
        VeryLongPress2_25 = 0x06,
        VeryLongPress2_50 = 0x07,
        VeryLongPress2_75 = 0x08,
        VeryLongPress3_00 = 0x09,
        VeryLongPress3_25 = 0x0A,
        VeryLongPress3_50 = 0x0B,
        VeryLongPress3_75 = 0x0C,
        VeryLongPress4_00 = 0x0D,
        VeryLongPress4_25 = 0x0E,
        VeryLongPress4_50 = 0x0F,
        VeryLongPress4_75 = 0x10,
        VeryLongPress5_00 = 0x11,
        VeryLongPress5_25 = 0x12,
        VeryLongPress5_50 = 0x13,
        VeryLongPress5_75 = 0x14,
        VeryLongPress6_00 = 0x15,
        VeryLongPress6_25 = 0x16,
        VeryLongPress6_50 = 0x17,
        VeryLongPress6_75 = 0x18,
        VeryLongPress7_00 = 0x19,
        VeryLongPress7_25 = 0x1A,
        VeryLongPress7_50 = 0x1B,
        VeryLongPress7_75 = 0x1C,
        VeryLongPress8_00 = 0x1D,
        VeryLongPress8_25 = 0x1E,
        VeryLongPress8_50 = 0x1F,
        VeryLongPress8_75 = 0x20,
        VeryLongPress9_00 = 0x21,
        VeryLongPress9_25 = 0x22,
        VeryLongPress9_50 = 0x23,
        VeryLongPress9_75 = 0x24,
        VeryLongPress10_00 = 0x25,
        VeryLongPress10_25 = 0x26,
        VeryLongPress10_50 = 0x27,
        VeryLongPress10_75 = 0x28,
        VeryLongPress11_00 = 0x29,
        VeryLongPress11_25 = 0x2A,
        VeryLongPress11_50 = 0x2B,
        VeryLongPress11_75 = 0x2C,
        VeryLongPress12_00 = 0x2D,
    }

    export type Device = Funkbus.Device<Command, CommandTime>;
}

export namespace Insta
{
    export enum Command
    {
        ChannelMinus = 0x00,
        ChannelPlus = 0x01,
    }

    export type Device = Funkbus.Device<Command, 0>;
}

export enum UnitCode
{
    Channel1 = 0x01,
    Channel2 = 0x02,
    Channel3 = 0x03,
    Channel4 = 0x04,
    Channel5 = 0x05,
    Channel6 = 0x06,
    Channel7 = 0x07,
    Channel8 = 0x08,
    Scene1 = 0x01,
    Scene2 = 0x02,
    Scene3 = 0x03,
    Scene4 = 0x04,
    Scene5 = 0x05,
}

export namespace Funkbus
{
    export interface Device<TCommand extends number, TCommandTime extends number>
    {
        id1: number;
        id2: number;
        groupCode: GroupCode;
        unitCode: UnitCode;
        command: TCommand;
        commandTime: TCommandTime;
        deviceType: number;
        rssi: number;
    }
}