import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserFormComponent } from './user/user-form/user-form.component';

const routes: Routes = [
  { path: 'stock', component: StockListComponent, pathMatch: 'full'},
  { path: 'carrito', component: CarritoComponent, pathMatch: 'full'},
  { path: 'user', component: UserLoginComponent, pathMatch: 'full'},
  { path: 'user/user-form', component: UserFormComponent, pathMatch: 'full'},
  { path: 'user/user-login', component: UserLoginComponent, pathMatch: 'full'}
  
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

export const routing = RouterModule.forRoot(routes);
