import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { AuthGuard } from 'src/authorize/auth.guard';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getById(id)
    }

    @Get()
    @UseGuards(AuthGuard)
    getAll() {
        return this.userService.getAll()
    }

    @Post()
    createUser(@Body() userDto: UserDto) {
        return this.userService.createUser(userDto)
    }

}
