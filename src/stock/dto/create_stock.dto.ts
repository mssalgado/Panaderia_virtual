import {IsEmail, IsNotEmpty} from "class-validator";

export class CreatestockDTO{

    @IsNotEmpty() readonly NomProducto : string;
    @IsNotEmpty() readonly PreProducto : number;
    readonly categoria : string;
    readonly info : string;
    readonly cantidad : number;
    readonly photoURL : string;
    readonly fechaProd : Date;
}