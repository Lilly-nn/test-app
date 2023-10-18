import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface DealObj {
    title: string;
    totalSum: number;
    depositSum: number;
    currency: string;
    daysLeft: number;
    percentsSold: number;
    image?: string;
}


@Table({ tableName: "deals" })
export class Deal extends Model<Deal, DealObj> {
    @ApiProperty({ example: '1', description: "unique id" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'The Marina Torch', description: "title" })
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({ example: '6500000', description: "total sum" })
    @Column({ type: DataType.INTEGER, allowNull: false })
    totalSum: number;

    @ApiProperty({ example: '60000', description: "deposit sum" })
    @Column({ type: DataType.INTEGER, allowNull: false })
    depositSum: number;

    @ApiProperty({ example: 'USD', description: "currency" })
    @Column({ type: DataType.STRING, allowNull: false })
    currency: string;

    @ApiProperty({ example: '30', description: "days left" })
    @Column({ type: DataType.INTEGER, allowNull: false })
    daysLeft: number;

    @ApiProperty({ example: '55', description: "percents sold" })
    @Column({ type: DataType.INTEGER, allowNull: false })
    percentsSold: number;

    @ApiProperty({ example: 'dc9ca653-3af7-4782-8acf-d496d6e35777.png', description: "image url" })
    @Column({ type: DataType.STRING, allowNull: true })
    image: string;
}