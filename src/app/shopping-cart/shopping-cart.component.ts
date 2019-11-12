import { Component, OnInit } from '@angular/core';
import { ShoppingCartService} from '../shopping-cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

 public cartProducts = [];
 //asta e un obiect gol
 public sum = {}

  constructor(private _shoppingCartService:ShoppingCartService) {}
  //trbuie sa fac cats service ca sa il pun mai sus

  ngOnInit() {
    // fac o lista noua. pun ce am in local storage in lista cartProducts(e variabila la nivel de clasa, adica o scriu fara var/const in fata, numai public sau private)
    //daca folosesc variabila asta inafara clasei, conform ES6 o pun cu this.numele variabilei

    //aici aduc lista ca sa o afisez
    const cartProducts = localStorage.getItem("pawshoppingcart");
    if (cartProducts){
      // cartProducts e o variabila care o sa contina arrayul rezultat din JSON.parse(de variabila) imi da un array
     this.cartProducts = JSON.parse(cartProducts);
  }
}


changeQuantity(value, item) {
  //parseInt imi trasnforma un string in numar
  const quantity = parseInt(value);
  this.sum[item.id] = quantity * item.price;
  console.log (this.sum);
}
}



