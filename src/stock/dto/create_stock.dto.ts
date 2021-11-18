import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDTO{
    
    @IsNotEmpty() readonly NomProducto : string;
    @IsNotEmpty() readonly PreProducto : string;
    readonly info : string;
    readonly cantidad : number;
    readonly photoURL : string;
    readonly fechaProd : Date;
}