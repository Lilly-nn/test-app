import { IsEmail, MinLength } from "class-validator";

export class UserDto {
    @IsEmail()
    readonly email: string;
    @MinLength(6, { message: "Password should contain at least 6 characters" })
    readonly password: string;
}