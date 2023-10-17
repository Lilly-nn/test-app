import { Body, Controller, Post } from '@nestjs/common';
import { AuthorizeService } from './authorize.service';
import { UserDto } from 'src/user/user.dto';

@Controller('auth')
export class AuthorizeController {
    constructor(private authorizeService: AuthorizeService) { }

    @Post('/register')
    register(@Body() userDto: UserDto) {
        return this.authorizeService.register(userDto)
    }

    @Post('/login')
    login(@Body() userDto: UserDto) {
        return this.authorizeService.login(userDto)
    }


}
