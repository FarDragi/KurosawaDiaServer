import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PrefixModule } from '@resources/prefix/prefix.module'
import { RegisterModule } from '@resources/register/register.module'
import { AppGateway } from './app.gateway'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        PrefixModule,
        RegisterModule
    ],
    controllers: [],
    providers: [
        AppGateway
    ]
})
export class AppModule {

}
