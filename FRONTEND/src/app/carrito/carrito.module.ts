import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';



@NgModule({
  declarations: [
    CarritoComponent,
    ListaCarritoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarritoModule { }
