import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller'
import { User } from '../../entities/user.entity'
import { UserGateway } from './user.gateway'
import { UserService } from './user.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ])
    ],
    providers: [
        UserService,
        UserGateway
    ],
    controllers: [
        UserController
    ]
})
export class UserModule {

}
