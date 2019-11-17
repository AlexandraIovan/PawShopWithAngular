import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDetailsService {

  constructor() { }

  setProductDetail(product) {
    localStorage.setItem('pawshopproductdetails', JSON.stringify(product));
  }

  getProductDetail() {
    const productDetails = localStorage.getItem('pawshopproductdetails');
    if (productDetails) {
      return JSON.parse(productDetails);
    }
    return null;
  }
}
