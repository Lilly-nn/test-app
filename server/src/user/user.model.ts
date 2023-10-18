import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserObj {
    email: string;
    password: string;
}


@Table({ tableName: "users" })
export class User extends Model<User, UserObj> {

    @ApiProperty({ example: '1', description: "unique id" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'user@gmail.com', description: "user email" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;


    @ApiProperty({ example: 'example89', description: "user password" })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;
}