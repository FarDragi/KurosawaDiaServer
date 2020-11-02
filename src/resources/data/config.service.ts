import { Guild } from '@models/database/guild.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ConfigService {
    private _guildRepo: Repository<Guild>

    constructor (@InjectRepository(Guild) guildRepo: Repository<Guild>) {
        this._guildRepo = guildRepo
    }

    async setPrefix (guildId: string, newPrefix: string): Promise<Guild> {
        const guild = await this._guildRepo.findOne({
            where: {
                id: guildId
            }
        }) as Guild

        guild.prefix = newPrefix

        await this._guildRepo.save(guild)
        return guild
    }

    async setLang (guildId: string, newLang: string): Promise<Guild> {
        const guild = await this._guildRepo.findOne({
            where: {
                id: guildId
            }
        }) as Guild

        guild.lang = newLang

        await this._guildRepo.save(guild)
        return guild
    }
}
