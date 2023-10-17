import { Module, forwardRef } from '@nestjs/common';
import { AuthorizeService } from './authorize.service';
import { AuthorizeController } from './authorize.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { DealsModule } from 'src/deals/deals.module';

@Module({
  providers: [AuthorizeService],
  controllers: [AuthorizeController],
  imports: [
    UserModule,
    forwardRef(() => DealsModule),
    JwtModule.register({
      secret: `${process.env.PRIVATE_KEY}`,
      signOptions: {
        expiresIn: "12h"
      }
    })],
  exports: [AuthorizeService, JwtModule]
})
export class AuthorizeModule { }
