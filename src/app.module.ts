import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@resources/config/config.module'
import { RegisterModule } from '@resources/register/register.module'
import { AppGateway } from './app.gateway'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        ConfigModule,
        RegisterModule
    ],
    controllers: [],
    providers: [
        AppGateway
    ]
})
export class AppModule {

}
