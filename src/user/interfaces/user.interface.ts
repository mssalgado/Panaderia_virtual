

export interface IUser{
    readonly id? : number;
    readonly usuario : string;
    readonly contraseña : string;
    readonly nombres : string; 
    readonly apellidos : string;
    readonly tiIdentidad : string;
    readonly nuIdentidad : number;
    readonly ciudad : string;
    readonly barrio : string;
    readonly direccion : string;
    readonly creacionfe : Date;
}