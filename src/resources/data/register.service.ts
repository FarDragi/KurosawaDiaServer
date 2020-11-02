import { Guild } from '@models/database/guild.entity'
import { Idol } from '@models/database/idol.entity'
import { User } from '@models/database/user.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class RegisterService {
    private _idolRepo: Repository<Idol>
    private _userRepo: Repository<User>
    private _guildRepo: Repository<Guild>

    constructor (
        @InjectRepository(Idol) idolRepo: Repository<Idol>,
        @InjectRepository(User) userRepo: Repository<User>,
        @InjectRepository(Guild) guildRepo: Repository<Guild>
    ) {
        this._idolRepo = idolRepo
        this._userRepo = userRepo
        this._guildRepo = guildRepo
    }

    async registerIdol (guildId: string, userId: string): Promise<Guild> {
        let idol = await this._idolRepo.findOne({
            where: {
                guildId: guildId,
                userId: userId
            },
            relations: [
                'guild'
            ]
        })

        if (!idol) {
            const user = this._userRepo.create({
                id: userId
            })

            const guild = this._guildRepo.create({
                id: guildId
            })

            idol = this._idolRepo.create({
                user: user,
                guild: guild
            })

            this._idolRepo.save(idol)
        }

        return idol.guild
    }
}
