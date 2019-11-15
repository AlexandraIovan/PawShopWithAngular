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
 public subtotal = null
 public currency = ''
 public total = null
 public shipping = 25
 public isCheckedout = false


  constructor(private _shoppingCartService:ShoppingCartService) {}

  chestiiRepetitive(){
    //chestiiRepetitive e o functie care contine un bloc de elemente care se repeta asa ca le-am pus in fucking chestii re=pe=ti=ti=ve!
    // fac o lista noua. pun ce am in local storage in lista cartProducts(e variabila la nivel de clasa, adica o scriu fara var/const in fata, numai public sau private)
    //daca folosesc variabila asta inafara clasei, conform ES6 o pun cu this.numele variabilei

    //aici aduc lista ca sa o afisez
    const cartProducts = localStorage.getItem("pawshoppingcart");
    if (cartProducts){
    // cartProducts e o variabila care o sa contina arrayul rezultat din JSON.parse(de variabila) imi da un array
     this.cartProducts = JSON.parse(cartProducts);
     if (this.cartProducts[0]){
       this.currency = this.cartProducts[0].currency;
     }
     //din cauza ca am pus function() , nu imi procesa bine ptr ca trimitea datele pe window. this era window DAR
     // DACA pun ()=>{} e din ES6 care pastreaza automat this-ul sa fie acelasi obiect
     this.cartProducts.forEach((item) => {
       this.sum[item.id] = parseInt(item.price);
     })
     this.calcSubtotal();
     this.calcTotal();
    }
  }

  ngOnInit() {
    this.chestiiRepetitive();
}


  changeQuantity(value, item) {
    //parseInt imi trasnforma un string in numar
    const quantity = parseInt(value);
    this.sum[item.id] = quantity * item.price;
    this.calcSubtotal();
    this.calcTotal();
  }
  
  removeFromCart(item){
    this._shoppingCartService.removeFromCart(item);
    this.chestiiRepetitive();
  }

  calcSubtotal(){
    const productsValue = Object.values(this.sum);
    console.log('productsValue',productsValue);
    const subtotal = productsValue.reduce((sum:number,currentValue:number) =>{
      return sum + currentValue;
    },0);
    this.subtotal = subtotal;
  }


  calcTotal(){
    this.total = this.subtotal + this.shipping;
  }

  cartCheckout(){
    this.isCheckedout = true;
  }
}



