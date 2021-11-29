import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCartComponent } from './user/user-cart/user-cart.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  {
    path:'user',
    component: UserListComponent
  },
  {
    path:'user/login',
    component: UserLoginComponent
  },
  {
    path:'user/cart',
    component: UserCartComponent
  },
  {
    path:'user/create',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
