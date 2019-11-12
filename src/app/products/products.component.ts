import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public stuffForCats = [];
   

  constructor(private _catsStuffService:ProductsService, private _shoppingCartService:ShoppingCartService) { }

  ngOnInit() { 
    this._catsStuffService.getstuffForCats()
        .subscribe(data => this.stuffForCats = data);
  }

  //pot pune acelasi nume de functie ptr ca actioneaza numai pe products
  addToCart(item){
    //_shoppingCartService ii din ShoppingCartService si contine functia addToCart care NU e aceeasi cu functia addToCart de aici
    this._shoppingCartService.addToCart(item)
    console.log(item);

  }

}
