import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('increment', {
        type: 'bigint',
        unsigned: true
    })
    id!: number

    @Column({
        type: 'varchar',
        nullable: false,
        length: 32
    })
    @Index({
        unique: true
    })
    discordId!: string
}
