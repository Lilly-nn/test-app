import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealDto } from './deal.dto';
import { AuthGuard } from 'src/authorize/auth.guard';

@Controller('deals')
export class DealsController {
    constructor(private dealsService: DealsService) { }

    @Get()
    getDeals() {
        return this.dealsService.getAll()
    }

    @Post()
    @UseGuards(AuthGuard)
    createDel(@Body() dealDto: DealDto) {
        return this.dealsService.createDeal(dealDto)
    }
}
