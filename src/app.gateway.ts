import { Logger } from '@nestjs/common'
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private _logger: Logger = new Logger('AppGateway')

    afterInit (server: Server) {
        this._logger.log('Initialized')
    }

    handleConnection (client: Socket, ...args: any[]) {
        this._logger.log('Client connect: ' + client.id)
    }

    handleDisconnect (client: Socket) {
        this._logger.log('Client disconnect: ' + client.id)
    }
}
