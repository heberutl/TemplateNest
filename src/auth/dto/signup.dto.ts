import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class SignUpDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsEmail({}, {message: "Please enter a correct email"})
    readonly email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password :string
}