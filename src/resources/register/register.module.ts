import { Module } from '@nestjs/common'
import { PrismaModule } from '@resources/prisma/prisma.module'
import { RegisterGateway } from './register.gateway'
import { RegisterService } from './register.service'

@Module({
    imports: [
        PrismaModule
    ],
    providers: [
        RegisterGateway,
        RegisterService
    ]
})
export class RegisterModule {

}
