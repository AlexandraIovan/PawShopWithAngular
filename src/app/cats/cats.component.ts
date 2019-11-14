import { Component, OnInit } from '@angular/core';
import { CatsService} from '../cats.service';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-cats',
 templateUrl: './cats.component.html',
 styleUrls: ['./cats.component.css']


})
export class CatsComponent implements OnInit {

  public cats = [];

  constructor(private _tabbyService:CatsService, private _shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
    this._tabbyService.getcats()
    .subscribe(data => this.cats = data);
  }

  //pot pune acelasi nume de functie ptr ca actioneaza numai pe products
  addToCart(item){
    //_shoppingCartService ii din ShoppingCartService si contine functia addToCart care NU e aceeasi cu functia addToCart de aici
    this._shoppingCartService.addToCart(item)
    console.log(item);

  }
}
