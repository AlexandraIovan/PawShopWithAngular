import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InterfaceCatsList} from './cats-list';
import { Observable } from 'rxjs';
@Injectable()
export class CatsListService {

  //private _url: string = "/assets/data/cats.json";
  private _url:string = " http://pawshop.herokuapp.com/cats"
  constructor(private http: HttpClient) { }

  getKittens(): Observable<InterfaceCatsList[]> {
    
    return this.http.get<InterfaceCatsList[]>(this._url);
  }
}
