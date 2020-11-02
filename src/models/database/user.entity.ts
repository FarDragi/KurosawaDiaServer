import { Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { Idol } from './idol.entity'

@Entity('users')
export class User {
    @PrimaryColumn('bigint', {
        unsigned: true
    })
    id!: string

    @OneToMany(() => Idol, x => x.guild)
    idols!: Idol[]
}
