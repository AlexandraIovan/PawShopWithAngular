import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceCats } from './interface-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private _url:string = "http://pawshop.herokuapp.com/cats";
  constructor(private http:HttpClient) { }
  getcats(): Observable<InterfaceCats[]>{
    return this.http.get<InterfaceCats[]>(this._url);
  }

}
