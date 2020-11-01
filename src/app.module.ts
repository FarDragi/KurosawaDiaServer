import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PrefixModule } from '@resources/prefix/prefix.module'
import { AppGateway } from './app.gateway'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        PrefixModule
    ],
    controllers: [],
    providers: [
        AppGateway
    ]
})
export class AppModule {

}
