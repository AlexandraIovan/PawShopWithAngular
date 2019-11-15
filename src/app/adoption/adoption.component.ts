import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../adoption.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {

  public adoptions = [];

  constructor(private _adoptionService: AdoptionService, private _shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
    this._adoptionService.getadoptions()
        .subscribe(data => this.adoptions = data);
  }
  //pot pune acelasi nume de functie ptr ca actioneaza numai pe products
  addToCart(item){
    item.isAdoption = true;
    //_shoppingCartService ii din ShoppingCartService si contine functia addToCart care NU e aceeasi cu functia addToCart de aici
    this._shoppingCartService.addToCart(item)
    console.log(item);
  }
  


}
