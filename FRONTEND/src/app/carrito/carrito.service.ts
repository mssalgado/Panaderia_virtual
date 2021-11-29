import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  Items = []
  encontrado = false;

  constructor() { }



  addCarrito(producto: any){

    this.Items.forEach((elemento) => {
      if(elemento.id == producto.id){
      this.encontrado = true;
      elemento.cantidad +=1;
      }
    });
    if(this.encontrado)
      this.Items.push(producto)
     
  }

  vaciarCarrito(){
    this.Items = [];
    return this.Items;
  }
  
  listarCarrito(){
    return this.Items;
  }
  

}


