import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { AuthorizeModule } from 'src/authorize/authorize.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    SequelizeModule.forFeature([User]),
    forwardRef(() => AuthorizeModule),
  ],
  exports: [UserService]
})
export class UserModule { }
