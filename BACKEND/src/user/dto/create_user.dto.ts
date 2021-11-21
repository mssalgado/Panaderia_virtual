import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDTO{
    
    @IsNotEmpty() readonly usuario : string;
    @IsNotEmpty() readonly contraseña : string;
    @IsNotEmpty() @IsEmail() readonly correo : string;
    readonly tiIdentidad : string;
    readonly nuIdentidad : number;
    readonly nombres : string; 
    readonly apellidos : string;
    readonly ciudad : string;
    readonly barrio : string;
    readonly direccion : string;
    readonly creacionfe : Date;
    
}