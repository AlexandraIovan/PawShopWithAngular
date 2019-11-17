import { Component, OnInit } from '@angular/core';
import { ProductsDetailsService } from '../products-details.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  public productDetails = { image: { url: '' }} // productDetails.image.url
  constructor(private _productsDetailsService:ProductsDetailsService, private _shoppingCartService:ShoppingCartService,  private router: Router) { }

  ngOnInit() {
    this.productDetails = this._productsDetailsService.getProductDetail();
    console.log('GET PRODUCT DETAILS ', this.productDetails)
  }

  addToCart(){
    //_shoppingCartService ii din ShoppingCartService si contine functia addToCart care NU e aceeasi cu functia addToCart de aici
    this._shoppingCartService.addToCart(this.productDetails)
    this.router.navigate(['/cart']);
  }

}
