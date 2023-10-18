import { Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/authorize/auth.guard';
import { DealDto } from './deal.dto';
import { DealPostDecorator, DealsGetDecorator } from './deals.decorator';
import { DealsService } from './deals.service';

@ApiTags("Deals")
@Controller('deals')
export class DealsController {
    constructor(private dealsService: DealsService) { }

    @Get()
    @DealsGetDecorator()
    @UseGuards(AuthGuard)
    getDeals() {
        return this.dealsService.getAll()
    }

    @Post()
    @DealPostDecorator()
    @UseInterceptors(FileInterceptor('image'))
    @UseGuards(AuthGuard)
    createDeal(@Body() dealDto: DealDto, @UploadedFile() image: any) {
        return this.dealsService.createDeal(dealDto, image)
    }
}
