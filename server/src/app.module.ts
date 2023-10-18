import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DealsModule } from './deals/deals.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { AuthorizeModule } from './authorize/authorize.module';
import { Deal } from './deals/deals.model';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from "path";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            // uri: process.env.POSTGRES_URI,
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Deal],
            autoLoadModels: true,
            // dialectOptions: {
            //     ssl: {
            //         require: true,
            //         rejectUnauthorized: false,
            //         native: true
            //     },
            // },

        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, "static"),
        }),
        DealsModule,
        UserModule,
        AuthorizeModule,
        FilesModule,
    ],
    controllers: [],
    providers: [],

})

export class AppModule {

}