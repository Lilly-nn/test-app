import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/user.dto';
import { LoginDecorator, RegisterDecorator } from './authorize.decorator';
import { AuthorizeService } from './authorize.service';

@ApiTags("Authorization")
@Controller('auth')
export class AuthorizeController {
    constructor(private authorizeService: AuthorizeService) { }

    @RegisterDecorator()
    @Post('/register')
    register(@Body() userDto: UserDto) {
        return this.authorizeService.register(userDto)
    }

    @LoginDecorator()
    @Post('/login')
    login(@Body() userDto: UserDto) {
        return this.authorizeService.login(userDto)
    }

}
