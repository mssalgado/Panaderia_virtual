import {IsEmail, IsNotEmpty} from "class-validator";


export class LoginUserDTO{
    @IsNotEmpty() readonly usuario : string;
    @IsNotEmpty() readonly contraseña : string;



}