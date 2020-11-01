import { Guild } from '@models/database/guild.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class GuildService {
    private _guildRepo: Repository<Guild>

    constructor (@InjectRepository(Guild) guildRepo: Repository<Guild>) {
        this._guildRepo = guildRepo
    }

    async setPrefix (guildDiscordId: string, newPrefix: string): Promise<Guild> {
        const guild = await this._guildRepo.findOne({
            where: {
                discordId: guildDiscordId
            }
        }) as Guild

        guild.prefix = newPrefix

        await this._guildRepo.save(guild)
        return guild
    }

    async getPrefix (guildDiscordId: string): Promise<Guild> {
        let guild = await this._guildRepo.findOne({
            where: {
                discordId: guildDiscordId
            }
        }) as Guild

        if (!guild) {
            guild = this._guildRepo.create({
                discordId: guildDiscordId
            })

            await this._guildRepo.save(guild)
        }

        return guild
    }
}
