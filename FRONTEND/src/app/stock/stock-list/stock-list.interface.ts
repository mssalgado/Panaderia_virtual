export interface IStock{

    readonly id?: number;
    readonly NomProducto: string;
    readonly PreProducto: string;
    readonly categoria: string;
    readonly info: string;
    readonly cantidad: string;
    readonly photoURL: string;
    readonly fechaProd?: string;
}