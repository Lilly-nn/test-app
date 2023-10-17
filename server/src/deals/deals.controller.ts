import { Controller, Get, Post, Body, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealDto } from './deal.dto';
import { AuthGuard } from 'src/authorize/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('deals')
export class DealsController {
    constructor(private dealsService: DealsService) { }

    @Get()
    getDeals() {
        return this.dealsService.getAll()
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    @UseGuards(AuthGuard)
    createDeal(@Body() dealDto: DealDto, @UploadedFile() image: any) {
        return this.dealsService.createDeal(dealDto, image)
    }
}
