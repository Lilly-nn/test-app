import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getById(id)
    }


    @Post()
    createUser(@Body() userDto: UserDto) {
        return this.userService.createUser(userDto)
    }

}
