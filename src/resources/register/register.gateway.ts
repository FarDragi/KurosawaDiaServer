import { Payload } from '@models/util/payload'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { RegisterService } from '@resources/data/register.service'
import { Socket } from 'socket.io'
import { RegisterIdol } from './register.resolver'

@WebSocketGateway()
export class RegisterGateway {
    private _registerService: RegisterService

    constructor (registerService: RegisterService) {
        this._registerService = registerService
    }

    @SubscribeMessage('registerIdol')
    async registerIdol (@ConnectedSocket() client: Socket, @MessageBody() payload: Payload<RegisterIdol>) {
        await this._registerService.registerIdol(
            payload.data.guildId,
            payload.data.userId
        )
        client.emit(payload.messageId, true)
    }
}
