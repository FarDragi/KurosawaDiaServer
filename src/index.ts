import { NestFactory } from '@nestjs/core'
import { config } from 'dotenv'
import { AppModule } from './app.module'
import { env } from 'process'

config()

init().catch(error => {
    console.log(error)
})

async function init () {
    const server = await NestFactory.create(AppModule)
    await server.listen(env.nest_port as string)
}
