import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceProducts } from './interface-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url:string = "http://pawshop.herokuapp.com/products";
  constructor(private http:HttpClient) { }

  getstuffForCats(): Observable<InterfaceProducts[]>{
    return this.http.get<InterfaceProducts[]>(this._url);
  }
}
