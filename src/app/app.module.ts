import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, rountingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import {CatsService} from './cats.service';

import {CatsListComponent} from './cats-list/cats-list.component';
import {CatsListDetailComponent} from './catslist-detail/catslist-detail.component';
import {CatsListService} from './cats-list.service';
import {HttpClientModule} from '@angular/common/http';
import { AdoptionComponent } from './adoption/adoption.component';
import { ProductsComponent } from './products/products.component';
import {AdoptionService} from './adoption.service';
import {ProductsService} from './products.service';




@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    CatsListComponent,
    CatsListDetailComponent,
    AdoptionComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatsService, CatsListService, AdoptionService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
