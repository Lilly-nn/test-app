import { ApiProperty } from "@nestjs/swagger";

export class DealDto {
    @ApiProperty({ example: "The Marina Torch", description: "title" })
    title: string;
    @ApiProperty({ example: "6500000", description: "total sum" })
    totalSum: number;
    @ApiProperty({ example: "60000", description: "deposit sum" })
    depositSum: number;
    @ApiProperty({ example: "USD", description: "currency" })
    currency: string;
    @ApiProperty({ example: "32", description: "days left" })
    daysLeft: number;
    @ApiProperty({ example: "50", description: "percents sold" })
    percentsSold: number;
}