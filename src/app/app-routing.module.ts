import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CatsComponent} from './cats/cats.component';
import { HomeComponent} from './home/home.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';




const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cats', component: CatsComponent },
    { path: 'adoption', component: AdoptionComponent },
    { path: 'products', component: ProductsComponent},
    { path: 'details', component: ProductsDetailsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'cart', component: ShoppingCartComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [CatsComponent, HomeComponent, AdoptionComponent, ProductsComponent, LoginComponent,ShoppingCartComponent, ProductsDetailsComponent, RegisterComponent];