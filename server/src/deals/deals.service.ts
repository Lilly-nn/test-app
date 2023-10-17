import { Injectable } from '@nestjs/common';
import { Deal } from './deals.model';
import { InjectModel } from '@nestjs/sequelize';
import { DealDto } from './deal.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class DealsService {
    constructor(@InjectModel(Deal) private dealSchema: typeof Deal, private fileService: FilesService) { }

    async getAll() {
        const deals = await this.dealSchema.findAll();
        return deals;
    }

    async createDeal(dto: DealDto, image: any) {
        const filename = image && await this.fileService.createFile(image);
        const deal = image ? await this.dealSchema.create({ ...dto, image: filename }) : await this.dealSchema.create(dto);
        return deal
    }
}
