import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceAdoptions} from './interface-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  private _url:string = "http://pawshop.herokuapp.com/adoptions"
  constructor(private http:HttpClient) { }

  getadoptions(): Observable<InterfaceAdoptions[]>{
    return this.http.get<InterfaceAdoptions[]>(this._url);
  }
}
