import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { Socket } from 'socket.io'
import { UserService } from './user.service'

@WebSocketGateway()
export class UserGateway {
    private userService: UserService

    constructor (userService: UserService) {
        this.userService = userService
    }

    @SubscribeMessage('message')
    handlerMessage (client: Socket, payload: string): string {
        console.log(payload)
        client.emit('message', this.userService.getString())
        return payload
    }
}
