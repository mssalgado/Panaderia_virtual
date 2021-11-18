import {IsEmail, IsNotEmpty} from "class-validator";

export class UserDTO{

    @IsNotEmpty() readonly id : string;
    @IsNotEmpty() readonly usuario : string;
    readonly nombres : string; 
    readonly apellidos : string;
    @IsNotEmpty() @IsEmail() readonly correo : string;
    readonly tiIdentidad : string;
    @IsNotEmpty() readonly nuIdentidad : number;
    readonly ciudad : string;
    readonly barrio : string;
    readonly direccion : string;
    readonly creacionfe : Date;
    readonly activo : boolean;

    
}