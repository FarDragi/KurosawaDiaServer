import { Guild } from '@models/database/guild.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GuildService } from './guild.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Guild
        ])
    ],
    providers: [
        GuildService
    ],
    exports: [
        GuildService
    ]
})
export class DataModule {

}
