import { Module } from '@nestjs/common'
import { ConfigModule } from '@resources/config/config.module'
import { PrismaModule } from '@resources/prisma/prisma.module'
import { RegisterModule } from '@resources/register/register.module'
import { AppGateway } from './app.gateway'

@Module({
    imports: [
        ConfigModule,
        RegisterModule,
        PrismaModule
    ],
    controllers: [],
    providers: [
        AppGateway
    ]
})
export class AppModule {

}
