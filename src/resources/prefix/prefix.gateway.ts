import { Payload } from '@models/payload'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { GuildService } from '@resources/data/guild.service'
import { Socket } from 'socket.io'
import { SetPrefix } from './prefix.resolver'

@WebSocketGateway()
export class PrefixGateway {
    private _guildService: GuildService

    constructor (guildService: GuildService) {
        this._guildService = guildService
    }

    @SubscribeMessage('setPrefix')
    async setPrefix (@ConnectedSocket() client: Socket, @MessageBody() payload: Payload<SetPrefix>) {
        const guild = await this._guildService.setPrefix(payload.data.guildDiscordId, payload.data.newPrefix)
        client.emit(payload.messageId, guild.prefix)
    }

    @SubscribeMessage('getPrefix')
    async getPrefix (@ConnectedSocket() client: Socket, @MessageBody() payload: Payload<string>) {
        const guild = await this._guildService.getPrefix(payload.data)
        client.emit(payload.messageId, guild.prefix)
    }
}
