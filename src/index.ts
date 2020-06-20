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
import { uint8, uint16, uint32, int8, int16, int32, float, double, Frame, FrameDescription, uint64, Protocol as CProtocol } from '@domojs/protocol-parser';
import { EventEmitter } from 'events';
export { uint8, uint16, uint32, int8, int16, int32, float, double, uint64 }
import { Queue, log as debug, eachAsync } from '@akala/core';
import * as usb from 'usb'
import * as serialport from 'serialport'
import * as os from 'os';

const log = debug('rfxtrx');

export enum PacketType
{
    INTERFACE_CONTROL = 0x0,
    INTERFACE_MESSAGE = 0x1,
    TRANSMITTER_MESSAGE = 0x2,
    UNDECODED_RF_MESSAGE = 0x3,

    LIGHTING1 = 0x10,
    LIGHTING2 = 0x11,
    LIGHTING3 = 0x12,
    LIGHTING5 = 0x14,
    LIGHTING4 = 0x13,
    LIGHTING6 = 0x15,
    CHIME = 0x16,
    FAN = 0x17,
    CURTAIN1 = 0x18,
    BLINDS1 = 0x19,
    RFY = 0x1A,
    HOMECONFORT = 0x1B,
    EDISIO = 0x1C,
    HONEYWELL_ACTIVLINK = 0x1D,
    FUNKBUS = 0x1E,

    SECURITY1 = 0x20,
    SECURITY2 = 0x21,
    CAMERA1 = 0x28,

    REMOTE_CONTROL = 0x30,

    THERMOSTAT1 = 0x40,
    THERMOSTAT2 = 0x41,
    THERMOSTAT3 = 0x42,
    BBQ1 = 0x48,
    BBQ_TEMPERATURE = 0x4E,
    TEMPERATURE_RAIN = 0x4F,

    TEMPERATURE = 0x50,
    HUMIDITY = 0x51,
    TEMPERATURE_HUMIDITY = 0x52,
    BAROMETRIC = 0x53,
    TEMPERATURE_HUMIDITY_BAROMETRIC = 0x54,
    RAIN = 0x55,
    WIND = 0x56,
    UV = 0x57,
    DATE_TIME = 0x58,
    CURRENT = 0x59,
    ENERGY = 0x5A,
    CURRENT_ENERGY = 0x5B,
    POWER = 0x5C,
    WEIGHT = 0x5D,
    GAS = 0x5E,
    WATER = 0x5F,
    RFXSENSOR = 0x5F,

    RFXMETER = 0x70,
    FS20 = 0x72,
    RAW = 0x7F,

    IO_LINES = 0x80,

    RESERVED = 0x90,

    UNKNOWN = 255

}


export var Protocol: CProtocol<Message> & { send?: (message: any) => Buffer } = new CProtocol<Message>([
    { name: 'length', type: 'uint8' },
    { name: 'type', type: 'uint16' },
    { name: 'sequenceNumber', type: 'uint8' },
    { name: 'message', type: 'subFrame', choose: { discriminator: 'type', subFrame: {} } },
]);

import * as Lighting1 from './lighting1';
import * as Lighting2 from './lighting2';
import * as Lighting3 from './lighting3';
import * as Lighting4 from './lighting4';
import * as Lighting5 from './lighting5';
import * as Lighting6 from './lighting6';
import * as Chime from './chime';
import * as Fan from './fan';
import * as Curtain1 from './curtain1';
import * as Blinds1 from './blinds1';
import * as Rfy from './rfy';
import * as Homeconfort from './homeconfort';
import * as Edisio from './edisio';
import * as Honeywell from './honeywell activelink';
import * as Funkbus from './funkbus';
import * as Camera1 from './camera1';
import * as Security1 from './security1';
import * as InterfaceControl from './0.interface.mode';
import * as InterfaceMessage from './1.interface.response';
import * as Elec1 from './elec1';
import * as Elec2 from './elec2';
import * as TemperatureHumidity from './temperature and humidity';
import { Interface } from 'readline';
import { readdir } from 'fs';
import { Duplex } from 'serialport';


export namespace Type
{
    export enum INTERFACE_CONTROL
    {
        Mode = PacketType.INTERFACE_CONTROL << 8 | 0x00,
    }
    export enum INTERFACE_MESSAGE
    {
        mode = PacketType.INTERFACE_MESSAGE << 8 | 0x00,
        unknownRTSRemote = PacketType.INTERFACE_MESSAGE << 8 | 0x01,
        noExtendedHardwarePresent = PacketType.INTERFACE_MESSAGE << 8 | 0x02,
        listRFYRemotes = PacketType.INTERFACE_MESSAGE << 8 | 0x03,
        listASARemotes = PacketType.INTERFACE_MESSAGE << 8 | 0x04,
        start = PacketType.INTERFACE_MESSAGE << 8 | 0x07,
        unknown = PacketType.INTERFACE_MESSAGE << 8 | 0xff,

    }
    export enum TRANSMITTER_MESSAGE
    {
        Error = PacketType.TRANSMITTER_MESSAGE << 8 | 0x00,
        Response = PacketType.TRANSMITTER_MESSAGE << 8 | 0x01,
    }
    export enum UNDECODED_RF_MESSAGE
    {
        AC = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x00,
        ARC = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x01,
        Ati = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x02,
        Hideki = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x03,
        UPM = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x03,
        Lacrosse = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x04,
        Viking = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x04,
        AD = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x05,
        Mertik = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x06,
        Oregon1 = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x07,
        Oregon2 = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x08,
        Oregon3 = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x09,
        Proguard = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x0A,
        Visonic = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x0B,
        Nec = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x0C,
        FS20 = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x0D,
        Reserved = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x0E,
        Blinds = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x0F,
        Rubicson = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x10,
        AE = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x11,
        FineOffset = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x12,
        RGB = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x13,
        RTS = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x14,
        SelectPlus = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x15,
        Homeconfort = PacketType.UNDECODED_RF_MESSAGE << 8 | 0x16,
    }

    export enum LIGHTING1
    {
        X10 = PacketType.LIGHTING1 << 8 | Lighting1.SubType.X10,
        ARC = PacketType.LIGHTING1 << 8 | Lighting1.SubType.ARC,
        AB400 = PacketType.LIGHTING1 << 8 | Lighting1.SubType.AB400,
        Waveman = PacketType.LIGHTING1 << 8 | Lighting1.SubType.Waveman,
        Chacon_EMW200 = PacketType.LIGHTING1 << 8 | Lighting1.SubType.Chacon_EMW200,
        IMPULS = PacketType.LIGHTING1 << 8 | Lighting1.SubType.IMPULS,
        RisingSun = PacketType.LIGHTING1 << 8 | Lighting1.SubType.RisingSun,
        PhilipsSBC = PacketType.LIGHTING1 << 8 | Lighting1.SubType.PhilipsSBC,
        Energenie_ENER010 = PacketType.LIGHTING1 << 8 | Lighting1.SubType.Energenie_ENER010,
        Energenie_5gang = PacketType.LIGHTING1 << 8 | Lighting1.SubType.Energenie_5gang,
        COCO_GDR22000R = PacketType.LIGHTING1 << 8 | Lighting1.SubType.COCO_GDR22000R,
        HQ_COCO20 = PacketType.LIGHTING1 << 8 | Lighting1.SubType.HQ_COCO20,
        Oase_Inscenio_FM_Master = PacketType.LIGHTING1 << 8 | Lighting1.SubType.Oase_Inscenio_FM_Master,
    }
    export enum LIGHTING2
    {
        AC = PacketType.LIGHTING2 << 8 | Lighting2.SubType.AC,
        HomeEasyEU = PacketType.LIGHTING2 << 8 | Lighting2.SubType.HomeEasyEU,
        ANSLUT = PacketType.LIGHTING2 << 8 | Lighting2.SubType.ANSLUT,
        KambrookRF3672 = PacketType.LIGHTING2 << 8 | Lighting2.SubType.KambrookRF3672,
    }
    export enum LIGHTING3
    {
        IkeaKoppla = PacketType.LIGHTING3 << 8 | Lighting3.SubType.IkeaKoppla
    }
    export enum LIGHTING4
    {
        PT2262 = PacketType.LIGHTING4 << 8 | Lighting4.SubType.PT2262
    }
    export enum LIGHTING5
    {
        LightwaveRF = PacketType.LIGHTING5 << 8 | Lighting5.SubType.LightwaveRF,
        Siemens = PacketType.LIGHTING5 << 8 | Lighting5.SubType.Siemens,
        EMW100GAO = PacketType.LIGHTING5 << 8 | Lighting5.SubType.EMW100GAO,
        Everflourish = PacketType.LIGHTING5 << 8 | Lighting5.SubType.Everflourish,
        BBSB = PacketType.LIGHTING5 << 8 | Lighting5.SubType.BBSB,
        MDRemote106LedDimmer = PacketType.LIGHTING5 << 8 | Lighting5.SubType.MDRemote106LedDimmer,
        ConradRSL2 = PacketType.LIGHTING5 << 8 | Lighting5.SubType.ConradRSL2,
        OTIO = PacketType.LIGHTING5 << 8 | Lighting5.SubType.OTIO,
        LivoloDimmer = PacketType.LIGHTING5 << 8 | Lighting5.SubType.LivoloDimmer,
        RGB_TRC02_2batt = PacketType.LIGHTING5 << 8 | Lighting5.SubType.RGB_TRC02_2batt,
        AokeRelay = PacketType.LIGHTING5 << 8 | Lighting5.SubType.AokeRelay,
        RGB_TRC02_3batt = PacketType.LIGHTING5 << 8 | Lighting5.SubType.RGB_TRC02_3batt,
        Eurodomest = PacketType.LIGHTING5 << 8 | Lighting5.SubType.Eurodomest,
        LivoloAppliance = PacketType.LIGHTING5 << 8 | Lighting5.SubType.LivoloAppliance,
        RGB432W = PacketType.LIGHTING5 << 8 | Lighting5.SubType.RGB432W,
        MDRemote107LedDimmer = PacketType.LIGHTING5 << 8 | Lighting5.SubType.MDRemote107LedDimmer,
        LegrandCAD = PacketType.LIGHTING5 << 8 | Lighting5.SubType.LegrandCAD,
        Avantek = PacketType.LIGHTING5 << 8 | Lighting5.SubType.Avantek,
        FA500 = PacketType.LIGHTING5 << 8 | Lighting5.SubType.FA500,
        PROMax = PacketType.LIGHTING5 << 8 | Lighting5.SubType.PROMax,
        MDRemote108LedDimmer = PacketType.LIGHTING5 << 8 | Lighting5.SubType.MDRemote108LedDimmer,
        Kangtai = PacketType.LIGHTING5 << 8 | Lighting5.SubType.Kangtai,
        Cotech = PacketType.LIGHTING5 << 8 | Lighting5.SubType.Cotech,
    }
    export enum LIGHTING6
    {
        Blyss = PacketType.LIGHTING6 << 8 | Lighting6.SubType.Blyss,
        Cuveo = PacketType.LIGHTING6 << 8 | Lighting6.SubType.Cuveo,
    }
    export enum CHIME
    {
        ByronSX = PacketType.CHIME << 8 | Chime.SubType.ByronSX,
        ByronMP001 = PacketType.CHIME << 8 | Chime.SubType.ByronMP001,
        SelectPlus = PacketType.CHIME << 8 | Chime.SubType.SelectPlus,
        Envivo = PacketType.CHIME << 8 | Chime.SubType.Envivo,
    }
    export enum FAN
    {
        SiemensSF01 = PacketType.FAN << 8 | Fan.SubType.SiemensSF01,
        IthoCVERFT = PacketType.FAN << 8 | Fan.SubType.IthoCVERFT,
        LucciAirFan = PacketType.FAN << 8 | Fan.SubType.LucciAirFan,
        SEAV = PacketType.FAN << 8 | Fan.SubType.SEAV,
        WestingHouse = PacketType.FAN << 8 | Fan.SubType.WestingHouse,
        LucciAirDC = PacketType.FAN << 8 | Fan.SubType.LucciAirDC,
        CasaFan = PacketType.FAN << 8 | Fan.SubType.CasaFan,
        FT1211RFan = PacketType.FAN << 8 | Fan.SubType.FT1211RFan,
        Falmec = PacketType.FAN << 8 | Fan.SubType.Falmec,
        LucciAirDCII = PacketType.FAN << 8 | Fan.SubType.LucciAirDCII,
    }
    export enum CURTAIN1
    {
        Harrison = PacketType.CURTAIN1 << 8 | Curtain1.SubType.Harrison
    }
    export enum BLINDS1
    {
        BlindsT0 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT0,
        BlindsT1 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT1,
        BlindsT2 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT2,
        BlindsT3 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT3,
        BlindsT4 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT4,
        BlindsT5 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT5,
        BlindsT6 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT6,
        BlindsT7 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT7,
        BlindsT8 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT8,
        BlindsT9 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT9,
        BlindsT10 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT10,
        BlindsT11 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT11,
        BlindsT12 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT12,
        BlindsT13 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT13,
        BlindsT14 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT14,
        // BlindsT15 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT15,
        BlindsT16 = PacketType.BLINDS1 << 8 | Blinds1.SubType.BlindsT16,
    }
    export enum RFY
    {
        Standard = PacketType.RFY << 8 | Rfy.SubType.Standard,
        Extended = PacketType.RFY << 8 | Rfy.SubType.Extended,
        RESERVED = PacketType.RFY << 8 | Rfy.SubType.RESERVED,
        ASA = PacketType.RFY << 8 | Rfy.SubType.ASA,
    }
    export enum HOMECONFORT
    {
        TEL010 = PacketType.HOMECONFORT << 8 | Homeconfort.SubType.Tel010,
    }
    export enum EDISIO
    {
        Controller = PacketType.EDISIO << 8 | Edisio.SubType.Controller,
    }
    export enum HOMECONFORT_ACTIVLINK
    {
        Homeconfort = PacketType.HONEYWELL_ACTIVLINK << 8 | Honeywell.SubType.Series5Chime,
    }
    export enum FUNKBUS
    {
        GiraRemote = PacketType.FUNKBUS << 8 | Funkbus.SubType.GiraRemote,
        InstaRemote = PacketType.FUNKBUS << 8 | Funkbus.SubType.InstaRemote,
    }
    export enum SECURITY1
    {
        X10DoorSensor = PacketType.SECURITY1 << 8 | Security1.SubType.X10DoorSensor,
        X10MotionSensor = PacketType.SECURITY1 << 8 | Security1.SubType.X10MotionSensor,
        X10Remote = PacketType.SECURITY1 << 8 | Security1.SubType.X10Remote,
        KD101 = PacketType.SECURITY1 << 8 | Security1.SubType.KD101,
        VisonicPowerCodeDoorSensor = PacketType.SECURITY1 << 8 | Security1.SubType.VisonicPowerCodeDoorSensor,
        VisonicPowerCodeMotionSensor = PacketType.SECURITY1 << 8 | Security1.SubType.VisonicPowerCodeMotionSensor,
        VisonicCodeSecure = PacketType.SECURITY1 << 8 | Security1.SubType.VisonicCodeSecure,
        VisonicPowerCodeDoorSensorAux = PacketType.SECURITY1 << 8 | Security1.SubType.VisonicPowerCodeDoorSensorAux,
        Meiantech = PacketType.SECURITY1 << 8 | Security1.SubType.Meiantech,
        Atlantic = PacketType.SECURITY1 << 8 | Security1.SubType.Atlantic,
        SA30 = PacketType.SECURITY1 << 8 | Security1.SubType.SA30,
        SA33 = PacketType.SECURITY1 << 8 | Security1.SubType.SA33,
        RM174RF = PacketType.SECURITY1 << 8 | Security1.SubType.RM174RF,
    }
    export enum SECURITY2
    {

    }
    export enum CAMERA1
    {

    }
    export enum REMOTE_CONTROL
    {

    }
    export enum THERMOSTAT1
    {

    }
    export enum THERMOSTAT2
    {

    }
    export enum THERMOSTAT3
    {

    }
    export enum BBQ1
    {

    }
    export enum BBQ_TEMPERATURE
    {

    }
    export enum TEMPERATURE_RAIN
    {

    }
    export enum TEMPERATURE
    {

    }
    export enum HUMIDITY
    {

    }
    export enum TEMPERATURE_HUMIDITY
    {
        TH1 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH1,
        TH2 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH2,
        TH3 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH3,
        TH4 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH4,
        TH5 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH5,
        TH6 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH6,
        TH7 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH7,
        TH8 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH8,
        TH9 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH9,
        TH10 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH10,
        TH11 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH11,
        TH12 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH12,
        TH13 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH13,
        TH14 = PacketType.TEMPERATURE_HUMIDITY << 8 | TemperatureHumidity.SubType.TH14,
    }
    export enum BAROMETRIC
    {

    }
    export enum TEMPERATURE_HUMIDITY_BAROMETRIC
    {

    }
    export enum RAIN
    {

    }
    export enum WIND
    {

    }
    export enum UV
    {

    }
    export enum DATE_TIME
    {

    }
    export enum CURRENT
    {

    }
    export enum ENERGY
    {
        CM119 = PacketType.ENERGY << 8 | Elec2.SubType.CM119,
        CM160 = PacketType.ENERGY << 8 | Elec2.SubType.CM160,
        CM180 = PacketType.ENERGY << 8 | Elec2.SubType.CM180,
    }
    export enum CURRENT_ENERGY
    {
        CM113 = PacketType.CURRENT << 8 | Elec1.SubType.CM113,
        Electrisave = PacketType.CURRENT << 8 | Elec1.SubType.Electrisave,
        CentaMeter = PacketType.CURRENT << 8 | Elec1.SubType.CentaMeter,
    }
    export enum POWER
    {

    }
    export enum WEIGHT
    {

    }
    export enum GAS
    {

    }
    export enum WATER
    {

    }
    export enum RFXSENSOR
    {

    }
    export enum RFXMETER
    {

    }
    export enum FS20
    {

    }
    export enum RAW
    {

    }
    export enum IO_LINES
    {

    }
    export enum RESERVED
    {

    }
    export enum UNKNOWN
    {

    }
}

export class Rfxtrx extends EventEmitter
{
    private static emptyBuffer = Buffer.allocUnsafe(0);

    private chunk: Buffer;
    private isOpen = false;
    private sendQueue: Queue<{ buffer: Buffer, callback: (err) => void }> = new Queue((message, next) =>
    {
        if (this.isOpen)
        {
            this.wire.write(message.buffer)
            this.wire.drain(message.callback);
        }
        next(this.isOpen);
    })
    private queue: Queue<Buffer> = new Queue((buffer, next) =>
    {
        log('processing queue')
        if (buffer == Rfxtrx.emptyBuffer)
        {
            buffer = this.chunk;

            log('splitting buffer', buffer);

            let offset = 0;
            while (buffer.length > offset + buffer[offset] + 1)
            {
                this.queue.enqueue(buffer.slice(offset, buffer[offset] + 1));
                offset += buffer[offset] + 1;
                log('frame complete');
            }
            if (buffer.length < offset + buffer[offset] + 1)
            {
                log('incomplete frame', buffer.slice(offset));

                this.chunk = buffer.slice(offset);
                next(true);
                return;
            }
            this.chunk = undefined;
        }

        log(buffer);
        var message = Protocol.read(buffer);
        this.sqnce = message.sequenceNumber;
        log(message);
        this.emit('message', message);
        next(true);
    });
    public constructor(private wire: Duplex & { close(cb: (err?: any) => void), drain(cb: (err?: any) => void), flush(cb: (err?: any) => void) })
    {
        super();

        this.wire.on('error', function (err)
        {
            log(err);
        })
        this.wire.on('open', () =>
        {
            this.isOpen = true;
            this.sendQueue.process();
        })
        this.wire.on('data', (buffer: Buffer) =>
        {
            if (typeof (this.chunk) != 'undefined')
                this.chunk = Buffer.concat([this.chunk, buffer]);
            else
                this.chunk = buffer;

            this.queue.enqueue(Rfxtrx.emptyBuffer);
        })
        this.on('message', (message: Message) =>
        {
            this.emit(message.type.toString(), message.message);

            this.emit(PacketType[(message.type & 0xff00) >> 8] as keyof PacketType, message.message);
            this.emit(Type[PacketType[(message.type & 0xff00) >> 8]][message.type], message.message);
        })
    }

    private isStarted: boolean;

    start(modes?: Partial<InterfaceControl.ModeCommand>)
    {
        modes = modes || {}
        if (typeof (modes.msg3) == 'undefined')
            modes.msg3 = 0;
        if (typeof (modes.msg4) == 'undefined')
            modes.msg4 = 0;
        if (typeof (modes.msg5) == 'undefined')
            modes.msg5 = 0;
        if (typeof (modes.msg6) == 'undefined')
            modes.msg6 = 0;
        return new Promise<void>(async (resolve, reject) =>
        {
            await this.send(Type.INTERFACE_CONTROL.Mode, {
                command: InterfaceControl.Commands.reset
            })
            var m = await this.send(Type.INTERFACE_CONTROL.Mode, {
                command: InterfaceControl.Commands.status
            });
            log(modes);
            log(m);
            if (
                (m.message.msg3 & modes.msg3) != modes.msg3 ||
                (m.message.msg4 & modes.msg4) != modes.msg4 ||
                (m.message.msg5 & modes.msg5) != modes.msg5 ||
                (m.message.msg6 & modes.msg6) != modes.msg6
            )
            {
                m = await this.send(Type.INTERFACE_CONTROL.Mode, Object.assign({
                    command: InterfaceControl.Commands.setMode,
                }, modes));

                if (
                    (m.message.msg3 & modes.msg3) != modes.msg3 ||
                    (m.message.msg4 & modes.msg4) != modes.msg4 ||
                    (m.message.msg5 & modes.msg5) != modes.msg5 ||
                    (m.message.msg6 & modes.msg6) != modes.msg6
                )
                {
                    this.close()
                    reject(new Error('Modes could not be set; Exiting'));
                    return;
                }

                var copyright: Message<InterfaceMessage.CheckRFXCOMDevice> = await this.send(Type.INTERFACE_CONTROL.Mode, { command: InterfaceControl.Commands.start });
                console.log(copyright);
                if (copyright.message.copyright != 'Copyright RFXCOM')
                {
                    this.close()
                    reject(new Error('Invalid RFXCOM devince; Exiting'));
                    return;
                }
                else
                {
                    this.isStarted = true;
                    resolve();
                }
            }
            else
            {
                var copyright: Message<InterfaceMessage.CheckRFXCOMDevice> = await this.send(Type.INTERFACE_CONTROL.Mode, { command: InterfaceControl.Commands.start });
                if (copyright.message.copyright != 'Copyright RFXCOM')
                {
                    this.close()
                    reject(new Error('Invalid RFXCOM devince; Exiting'));
                    return;
                }
                else
                {
                    this.isStarted = true;
                    resolve();
                }
            }
        })
    }

    public on<T>(type: keyof Type.INTERFACE_MESSAGE, handler: (message: T) => void)
    public on<T>(type: Type.INTERFACE_MESSAGE, handler: (message: T) => void)
    public on<T extends keyof EventMap>(type: T, handler: (message: EventMap[T]) => void)
    public on(eventName: 'message', handler: (message: Message) => void)
    public on(eventName: 'message' | keyof Type.INTERFACE_MESSAGE | Type.INTERFACE_MESSAGE | keyof PacketType, handler: (message: Message<any>) => void)
    {
        super.on(eventName.toString(), handler);
    }

    public once<T>(type: keyof Type.INTERFACE_MESSAGE, handler: (message: T) => void)
    public once<T>(type: Type.INTERFACE_MESSAGE, handler: (message: T) => void)
    public once(eventName: 'message', handler: (message: Message) => void)
    public once(eventName: 'message' | keyof Type.INTERFACE_MESSAGE | Type.INTERFACE_MESSAGE, handler: (message: Message<any>) => void)
    {
        super.once(eventName.toString(), handler);
    }

    private sqnce: number = 0;

    public close(): Promise<void>
    {
        return new Promise((resolve, reject) =>
        {
            this.wire.close(function (err)
            {
                if (err)
                    reject(err);
                else
                    resolve();
            });
        })
    }

    public send(type: Type.INTERFACE_CONTROL, message?: Partial<InterfaceControl.ModeCommand>)
    public send(type: Type.RFY, message?: Partial<Rfy.Device>)
    public send<T extends RFXDevice>(type: number, message?: Partial<T>)
    public send<T extends RFXDevice>(type: number, message?: Partial<T>)
    {
        var msg: Message<Partial<T>> = { type: type, message: message, sequenceNumber: this.sqnce++, length: 0 };
        log(msg);
        var buffer = Protocol.write(msg);
        buffer[0] = buffer.length - 1;
        return new Promise<Message<any>>((resolve, reject) =>
        {
            log(buffer);
            if (type != Type.INTERFACE_CONTROL.Mode || (message as Partial<InterfaceControl.ModeCommand>).command != InterfaceControl.Commands.reset)
                this.once('message', resolve);
            var cb = (err) =>
            {
                if (err)
                    reject(err);
                else
                {
                    if (type == Type.INTERFACE_CONTROL.Mode && (message as Partial<InterfaceControl.ModeCommand>).command == InterfaceControl.Commands.reset)
                        setTimeout(() =>
                        {
                            this.wire.flush(function (err)
                            {
                                if (err)
                                    reject(err);
                                else
                                    resolve();
                            });
                        }, 1000)
                }
            };
            this.sendQueue.enqueue({ buffer: buffer, callback: cb });
        })
    }

    public static getSerial(path?: string)
    {
        return new Promise<Rfxtrx>((resolve, reject) =>
        {
            if (!path)
                Rfxtrx.listEligibleSerials().then(devices =>
                {
                    if (devices.length == 0)
                        return reject('no matching port could be found');
                    if (devices.length > 1)
                        return reject('multiple RFXCOM adapters found');
                    resolve(new Rfxtrx(new serialport(devices[0], { baudRate: 38400, })));
                });
            else
                resolve(new Rfxtrx(new serialport(path, { baudRate: 38400, })));
        });
    }

    public static async listEligibleSerials()
    {

        const devices = usb.getDeviceList().filter(d => d.deviceDescriptor.idVendor == 1027 && d.deviceDescriptor.idProduct == 24577);
        const result: usb.Device[] = [];
        await eachAsync(devices, (d, i, next) =>
        {
            d.open();
            d.getStringDescriptor(d.deviceDescriptor.iManufacturer, function (error, data)
            {
                if (data.toString() == 'RFXCOM')
                    result.push(d);
                d.close();
                next();
            });
        });
        if (os.platform() == "linux" && result.length > 0)
        {
            const serials: string[] = [];
            await eachAsync(result, (d, i, next) =>
            {
                readdir('/sys/bus/usb/devices/' + d.busNumber + '-' + d.portNumbers.join('.') + '/' + d.busNumber + '-' + d.portNumbers.join('.') + ':1.0', function (err, files)
                {

                    if (files)
                    {
                        var tty = files.find(f => f.startsWith('tty'));
                        if (tty)
                            serials.push('/dev/' + tty);
                    }
                    next(err);
                });
            });

            return serials;
        }
        return (await serialport.list()).filter(port => port.manufacturer && port.manufacturer == 'RFXCOM').map(sp => sp.path);
    }
}

export type EventMapSimple = { [k in keyof PacketType]: RFXDevice }
export interface EventMap extends AnimationEventMap
{
    INTERFACE_MESSAGE: InterfaceMessage.ModeResponse | InterfaceMessage.ListRFYRemote | InterfaceMessage.CheckRFXCOMDevice;
    CURRENT_ENERGY: Elec1.Device;
    ENERGY: Elec2.Device;
    TEMPERATURE_HUMIDITY: TemperatureHumidity.Device;
}

export interface Message<TSubMessage = any>
{
    length: uint16;
    type: number;
    sequenceNumber: number;
    message: TSubMessage;
}

export type RFXDevice =
    InterfaceControl.ModeCommand
    | Rfy.Device
    | Blinds1.Device
    | Fan.Device

    | Lighting1.Device
    | Lighting2.Device
    | Lighting3.Device
    | Lighting4.Device
    | Lighting5.Device
    | Lighting6.Device
    | Elec1.Device
    | Elec2.Device
    | TemperatureHumidity.Device
    ;

InterfaceControl.init();
InterfaceMessage.init();
Rfy.init();
Blinds1.init();
Fan.init();
Lighting1.init();
Lighting2.init();
Lighting3.init();
Lighting4.init();
Lighting5.init();
Lighting6.init();
Elec1.init();
Elec2.init();
TemperatureHumidity.init();