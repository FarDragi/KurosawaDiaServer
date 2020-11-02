import { Idol } from '@models/database/idol.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class IdolService {
    private _idolRepo: Repository<Idol>

    constructor (
        @InjectRepository(Idol) idolRepo: Repository<Idol>
    ) {
        this._idolRepo = idolRepo
    }
}
