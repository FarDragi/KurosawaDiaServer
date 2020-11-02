import { Payload } from '@models/util/payload'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { PrefixService } from '@resources/data/prefix.service'
import { Socket } from 'socket.io'
import { SetPrefix } from './prefix.resolver'

@WebSocketGateway()
export class PrefixGateway {
    private _prefixService: PrefixService

    constructor (guildService: PrefixService) {
        this._prefixService = guildService
    }

    @SubscribeMessage('setPrefix')
    async setPrefix (@ConnectedSocket() client: Socket, @MessageBody() payload: Payload<SetPrefix>) {
        const guild = await this._prefixService.setPrefix(
            payload.data.guildDiscordId,
            payload.data.newPrefix
        )
        client.emit(payload.messageId, guild.prefix)
    }

    @SubscribeMessage('getPrefix')
    async getPrefix (@ConnectedSocket() client: Socket, @MessageBody() payload: Payload<string>) {
        const guild = await this._prefixService.getPrefix(payload.data)
        client.emit(payload.messageId, guild.prefix)
    }
}
