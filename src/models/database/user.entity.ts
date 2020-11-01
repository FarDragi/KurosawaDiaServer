import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Idol } from './idol.entity'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment', {
        type: 'bigint',
        unsigned: true
    })
    id!: number

    @Column('varchar', {
        length: 64,
        nullable: false
    })
    @Index({ unique: true })
    discordId!: string

    @OneToMany(() => Idol, x => x.guild)
    idols!: Idol[]
}
