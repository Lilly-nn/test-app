import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userSchema: typeof User) { }

    async createUser(dto: UserDto) {
        const user = await this.userSchema.create(dto);
        return user;
    }

    async getById(id: string) {
        const user = await this.userSchema.findOne({ where: { id } });
        return user;
    }

    async getByEmail(email: string) {
        const user = await this.userSchema.findOne({ where: { email } });
        return user;
    }

}
