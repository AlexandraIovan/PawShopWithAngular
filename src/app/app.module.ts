import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, rountingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
/*import { AdoptionComponent } from './adoption/adoption.component';
import { ProductsComponent } from './products/products.component';*/

//rountingComponents le tine locul.se adauga new components doar in ap-routing.module.ts

import {AdoptionService} from './adoption.service';
import {ProductsService} from './products.service';
import {CatsService} from './cats.service';



@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
   // AdoptionComponent,
   // ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatsService, AdoptionService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
