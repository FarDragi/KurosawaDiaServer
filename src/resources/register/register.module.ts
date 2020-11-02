import { Module } from '@nestjs/common'
import { DataModule } from '@resources/data/data.module'
import { RegisterGateway } from './register.gateway'

@Module({
    imports: [
        DataModule
    ],
    providers: [
        RegisterGateway
    ]
})
export class RegisterModule {

}
