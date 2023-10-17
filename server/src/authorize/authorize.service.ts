import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.model';

@Injectable()
export class AuthorizeService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async register(userDto: UserDto) {
        const exists = await this.userService.getByEmail(userDto.email);
        if (exists) {
            throw new HttpException("User with such email already exists", HttpStatus.BAD_REQUEST)
        }
        const hashedPassword = await bcrypt.hash(userDto.password, 6);
        const user = await this.userService.createUser({ ...userDto, password: hashedPassword });
        return this.generateToken(user);
    }

    async login(userDto: UserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    private async generateToken(userInfo: User) {
        const { email, id } = userInfo;
        return {
            token: this.jwtService.sign({ email, id })
        }
    }

    private async validateUser(userInfo: UserDto) {
        const user = await this.userService.getByEmail(userInfo.email);
        const validCredentials = user && await bcrypt.compare(userInfo.password, user.password);
        if (validCredentials) {
            return user;
        }
        throw new UnauthorizedException("Email or password is not valid");
    }

}
