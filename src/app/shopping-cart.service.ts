import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  addToCart(item){
    // getItem imi ia valoarea de la cheia pawshoppingcart si o stocheaza in constanta cartStorage
    const cartStorage = localStorage.getItem("pawshoppingcart");
    if (cartStorage){
      // productsArray e o variabila care o sa contina arrayul rezultat din JSON.parse(de variabila) imi da un array
      const productsArray = JSON.parse(cartStorage);
      //asa verific id ul cu fiecare element din lista ca sa nu adaug produsul de doua ori
      const found = productsArray.find(function(element) {
        return element.id === item.id;
      });
      //daca produsul nu exista deja in lista, il adaug
      if (!found){
        //asta adauga un elemant nou la array ul meu
        productsArray.push(item);
        //dupa ce am adaugat elementul la array, mi-l face string si mi-l pune in localstorage
        localStorage.setItem("pawshoppingcart", JSON.stringify(productsArray));
      }
      //daca nu am nicio valoare pe cheia pawshoppingcart, fac o lista noua, adaug itemul la ea, si apoi adaug in localStorage
    } else {
      const productsList = [];
      productsList.push(item);
      //localStorage.setItem asta salveaza lista.; JSON.stringify(productsList) imi transforma lista mea din array in string
      localStorage.setItem("pawshoppingcart", JSON.stringify(productsList));
    }

  }
}
