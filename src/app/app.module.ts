import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, rountingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import {CatsService} from './cats.service';

import {CatsListComponent} from './cats-list/cats-list.component';
import {CatsListDetailComponent} from './cats-list/catslist-detail.component';
import {CatsListService} from './cats-list.service';




@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    CatsService,
    CatsListComponent,
    CatsListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //providers: [CatsService],
  providers: [CatsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
