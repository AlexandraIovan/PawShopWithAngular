import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, rountingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
/*import { AdoptionComponent } from './adoption/adoption.component';
import { ProductsComponent } from './products/products.component';*/

//rountingComponents le tine locul.se adauga new components doar in ap-routing.module.ts

import { AdoptionService } from './adoption.service';
import { ProductsService } from './products.service';
import { CatsService } from './cats.service';
import { LoginService } from './login.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
   // AdoptionComponent,
   // ProductsComponent
   LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CatsService, AdoptionService, ProductsService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  }



