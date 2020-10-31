import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService {
    private userRepository: Repository<User>

    constructor (@InjectRepository(User) userRepository: Repository<User>) {
        this.userRepository = userRepository
    }

    getString () {
        return 'teste2'
    }
}
