import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './user.model';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @ApiOperation({ summary: "Get user by id" })
    @ApiResponse({ status: 200, type: User })
    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getById(id)
    }

    @ApiOperation({ summary: "User creation" })
    @ApiResponse({ status: 200, type: User })
    @Post()
    createUser(@Body() userDto: UserDto) {
        return this.userService.createUser(userDto)
    }

}
