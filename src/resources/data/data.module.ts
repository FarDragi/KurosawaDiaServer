import { Guild } from '@models/database/guild.entity'
import { Idol } from '@models/database/idol.entity'
import { User } from '@models/database/user.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from './config.service'
import { RegisterService } from './register.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Guild,
            Idol,
            User
        ])
    ],
    providers: [
        ConfigService,
        RegisterService
    ],
    exports: [
        ConfigService,
        RegisterService
    ]
})
export class DataModule {

}
