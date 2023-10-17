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
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    totalSum: number;


    @Column({ type: DataType.INTEGER, allowNull: false })
    depositSum: number;

    @Column({ type: DataType.STRING, allowNull: false })
    currency: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    daysLeft: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    percentsSold: number;

    @Column({ type: DataType.STRING, allowNull: true })
    image: string;
}