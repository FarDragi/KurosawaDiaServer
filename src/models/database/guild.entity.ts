import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { Idol } from './idol.entity'

@Entity('guilds')
export class Guild {
    @PrimaryColumn('bigint', {
        unsigned: true
    })
    id!: string

    @Column('varchar', {
        nullable: false,
        length: 13,
        default: '~'
    })
    prefix!: string

    @Column('varchar', {
        nullable: false,
        length: 6,
        default: 'en-us'
    })
    lang!: string

    @OneToMany(() => Idol, x => x.guild)
    idols!: Idol[]
}
