import { Logger } from '@nestjs/common'
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway } from '@nestjs/websockets'
import { Socket } from 'socket.io'

@WebSocketGateway({

})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger: Logger = new Logger('AppGateway')

    afterInit (server: any) {
        this.logger.log('Initialized')
    }

    handleDisconnect (client: Socket) {
        this.logger.log(client.id)
    }

    handleConnection (client: Socket, ...args: any[]) {
        this.logger.log(client.id)
    }
}
