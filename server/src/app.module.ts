import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DealsModule } from './deals/deals.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { AuthorizeModule } from './authorize/authorize.module';
import { Deal } from './deals/deals.model';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Deal],
            autoLoadModels: true
        }),
        DealsModule,
        UserModule,
        AuthorizeModule,
    ],
    controllers: [],
    providers: [],

})

export class AppModule {

}