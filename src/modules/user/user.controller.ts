import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
    private userService: UserService

    constructor (userService: UserService) {
        this.userService = userService
    }

    @Get('teste')
    all () {
        return this.userService.getString()
    }
}
