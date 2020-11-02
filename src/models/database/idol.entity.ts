import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Guild } from './guild.entity'
import { User } from './user.entity'

@Entity('idols')
export class Idol {
    @PrimaryGeneratedColumn('increment', {
        type: 'bigint',
        unsigned: true
    })
    id!: number

    @Column('bigint', {
        nullable: false,
        unsigned: true
    })
    guildId!: string

    @Column('bigint', {
        nullable: false,
        unsigned: true
    })
    userId!: string

    @ManyToOne(() => Guild, x => x.idols, {
        cascade: true
    })
    guild!: Guild

    @ManyToOne(() => User, x => x.idols, {
        cascade: true
    })
    user!: User
}
