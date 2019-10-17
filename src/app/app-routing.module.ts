import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CatsComponent} from './cats/cats.component';
import { HomeComponent} from './home/home.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cats', component: CatsComponent },
    { path: 'adoption', component: AdoptionComponent },
    { path: 'products', component: ProductsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [CatsComponent, HomeComponent, AdoptionComponent, ProductsComponent];