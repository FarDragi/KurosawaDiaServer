import { Logger } from '@nestjs/common'
import { OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { Socket } from 'socket.io'

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
    private logger: Logger = new Logger('AppGateway')

    afterInit (server: any) {
        this.logger.log('Initialized')
    }

    @SubscribeMessage('message')
    handlerMessage (client: Socket, payload: string): string {
        console.log(payload)
        client.emit('teste', payload)
        return payload
    }
}
