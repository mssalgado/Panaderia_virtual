import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserCartComponent } from './user/user-cart/user-cart.component';
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    StockListComponent,
    StockFormComponent,
    NavbarComponent,
    UserLoginComponent,
    UserCartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
