import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppGateway } from './app.gateway'
import { UserModule } from './modules/user/user.module'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule
    ],
    controllers: [],
    providers: [
        AppGateway
    ]
})
export class AppModule {

}
