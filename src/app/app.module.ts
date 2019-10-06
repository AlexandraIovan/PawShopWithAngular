import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, rountingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import {CatsService} from './cats.service';

import {CatsListComponent} from './cats-list/cats-list.component';
import {CatsListDetailComponent} from './catslist-detail/catslist-detail.component';
import {CatsListService} from './cats-list.service';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    CatsListComponent,
    CatsListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatsService, CatsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
