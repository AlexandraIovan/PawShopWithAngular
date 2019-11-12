import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, rountingComponents } from './app-routing.module';
//rountingComponents le tine locul.se adauga new components doar in ap-routing.module.ts


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
/*import { AdoptionComponent } from './adoption/adoption.component';
import { ProductsComponent } from './products/products.component';*/

import { AdoptionService } from './adoption.service';
import { ProductsService } from './products.service';
import { CatsService } from './cats.service';
import { LoginService } from './login.service';
import { ShoppingCartService } from './shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
   // AdoptionComponent,
   // ProductsComponent
  //  LoadingSpinnerComponent,
  //  ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CatsService, AdoptionService, ProductsService, LoginService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  }



