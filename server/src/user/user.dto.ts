import { IsEmail, MinLength } from "class-validator";

export class UserDto {
    @IsEmail()
    email: string;
    @MinLength(6, { message: "Password should contain at least 6 characters" })
    password: string;
}