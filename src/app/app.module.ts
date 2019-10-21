import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, rountingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
/*import { AdoptionComponent } from './adoption/adoption.component';
import { ProductsComponent } from './products/products.component';*/

//rountingComponents le tine locul.se adauga new components doar in ap-routing.module.ts

import { AdoptionService } from './adoption.service';
import { ProductsService } from './products.service';
import { CatsService } from './cats.service';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { ForgottenPasswordService } from './forgotten-password.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';



@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    ProductDetailComponent,
    ProductsDetailsComponent,
   // AdoptionComponent,
   // ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatsService, AdoptionService, ProductsService, LoginService, RegisterService, ForgottenPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
