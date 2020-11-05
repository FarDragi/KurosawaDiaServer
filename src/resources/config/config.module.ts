import { Module } from '@nestjs/common'
import { PrismaModule } from '@resources/prisma/prisma.module'
import { ConfigGateway } from './config.gateway'
import { ConfigService } from './config.service'

@Module({
    imports: [
        PrismaModule
    ],
    providers: [
        ConfigGateway,
        ConfigService
    ]
})
export class ConfigModule {

}
