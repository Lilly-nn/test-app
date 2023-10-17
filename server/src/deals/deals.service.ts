import { Injectable } from '@nestjs/common';
import { Deal } from './deals.model';
import { InjectModel } from '@nestjs/sequelize';
import { DealDto } from './deal.dto';

@Injectable()
export class DealsService {
    constructor(@InjectModel(Deal) private dealSchema: typeof Deal) { }

    async getAll() {
        const deals = await this.dealSchema.findAll();
        return deals;
    }

    async createDeal(dto: DealDto) {
        const deal = await this.dealSchema.create(dto);
        return deal;
    }
}
