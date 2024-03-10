import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { SingComponent } from './Pages/sing/sing.component';
import { HomeComponent } from './Pages/home/home.component';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { NotFondComponent } from './Layout/not-fond/not-fond.component';
import { ProductComponent } from './Pages/product/product.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { authUserLoginGuard } from './Guard/auth-user-login.guard';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'' , component:MainLayoutComponent , children:[
    {path:'' , redirectTo:'/home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'Products' , component:ProductComponent},
    { path: 'Product-Details/:id', component: ProductDetailsComponent , canActivate:[authUserLoginGuard]},
  ]},
  {path:'login' , component:LoginComponent},
  {path:'sing' , component:SingComponent},
  {path:'add-product' , component:AddProductComponent},
  {path:'**' , component:NotFondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
