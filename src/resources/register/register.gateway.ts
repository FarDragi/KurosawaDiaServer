import { Payload } from '@models/util/payload'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { Socket } from 'socket.io'
import { RegisterIdol, ResultRegisterIdol } from './register.resolver'
import { RegisterService } from './register.service'

@WebSocketGateway()
export class RegisterGateway {
    private _registerService: RegisterService

    constructor (registerService: RegisterService) {
        this._registerService = registerService
    }

    @SubscribeMessage('registerIdol')
    async registerIdol (@ConnectedSocket() client: Socket, @MessageBody() payload: Payload<RegisterIdol>) {
        const idol = await this._registerService.registerIdol(
            payload.data.guildId,
            payload.data.userId
        )

        client.emit(payload.messageId, {
            prefix: idol?.guild.config.prefix,
            lang: idol?.guild.config.lang
        } as ResultRegisterIdol)
    }
}
