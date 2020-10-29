import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app.module'

class NestServer {
    private server!: INestApplication
    private _port: number

    constructor () {
        this._port = 5000
    }

    set port (value: number) {
        this._port = value
    }

    async config () {
        this.server = await NestFactory.create(AppModule)
    }

    async start () {
        await this.server.listen(this._port)
        console.log('Nest server start in port: ' + this._port)
    }
}

const nestServer = new NestServer()

export default nestServer
