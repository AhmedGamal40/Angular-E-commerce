import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { SingComponent } from './Pages/sing/sing.component';
import { HomeComponent } from './Pages/home/home.component';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { ProductComponent } from './Pages/product/product.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { ProductCartComponent } from './Componatns/product-cart/product-cart.component';
import { NotFondComponent } from './Layout/not-fond/not-fond.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SingComponent,
    HomeComponent,
    MainLayoutComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductCartComponent,
    NotFondComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
