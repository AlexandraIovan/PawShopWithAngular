import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  template:`
  <ul *ngFor="let things of stuffForCats">
  <li>{{things.name}} - {{things.description}}</li>
  </ul>
  `,
  styles:[]
})
export class ProductsComponent implements OnInit {

  public stuffForCats = [];
   

  constructor(private _catsStuffService:ProductsService) { }

  ngOnInit() { 
    this._catsStuffService.getstuffForCats()
        .subscribe(data => this.stuffForCats = data);
  }

}
