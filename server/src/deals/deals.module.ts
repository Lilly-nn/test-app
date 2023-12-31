import { Module, forwardRef } from '@nestjs/common';
import { DealsController } from './deals.controller';
import { DealsService } from './deals.service';
import { Deal } from './deals.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorizeModule } from 'src/authorize/authorize.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  controllers: [DealsController],
  providers: [DealsService],
  imports: [
    forwardRef(() => AuthorizeModule),
    SequelizeModule.forFeature([Deal]),
    FilesModule
  ],
  exports: [DealsService]
})
export class DealsModule { }
