import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public stuffForCats = [];
   

  constructor(private _catsStuffService:ProductsService) { }

  ngOnInit() { 
    this._catsStuffService.getstuffForCats()
        .subscribe(data => this.stuffForCats = data);
  }

}
