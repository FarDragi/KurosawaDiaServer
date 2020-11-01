import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Idol } from './idol.entity'

@Entity('guilds')
export class Guild {
    @PrimaryGeneratedColumn('increment', {
        type: 'bigint',
        unsigned: true
    })
    id!: number

    @Column('varchar', {
        nullable: false,
        length: 20
    })
    @Index({ unique: true })
    discordId!: string

    @Column('varchar', {
        nullable: false,
        length: 13,
        default: '~'
    })
    prefix!: string

    @OneToMany(() => Idol, x => x.guild)
    idols!: Idol[]
}
