import { Payload } from '@models/util/payload'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { ConfigService } from '@resources/data/config.service'
import { Socket } from 'socket.io'
import { SetLang, SetPrefix } from './config.resolver'

@WebSocketGateway()
export class ConfigGateway {
    private _configService: ConfigService

    constructor (configService: ConfigService) {
        this._configService = configService
    }

    @SubscribeMessage('setPrefix')
    async setPrefix (@ConnectedSocket() client: Socket, @MessageBody() payload: Payload<SetPrefix>) {
        const guild = await this._configService.setPrefix(
            payload.data.guildId,
            payload.data.newPrefix
        )
        client.emit(payload.messageId, guild.prefix)
    }

    @SubscribeMessage('setLang')
    async getLang (@ConnectedSocket() client: Socket, @MessageBody() payload: Payload<SetLang>) {
        const guild = await this._configService.setLang(
            payload.data.guildId,
            payload.data.newLang
        )
        client.emit(payload.messageId, guild.lang)
    }
}
