import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceLogin } from './interface-types';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url:string = "http://pawshop.herokuapp.com/auth/local";

  constructor(private http:HttpClient) { }

  getconnection():Observable<InterfaceLogin[]>{
    return this.http.get<InterfaceLogin[]>("");
  }

  login(email: string, password: string){
    return this.http.post<InterfaceLogin>(this._url,
      {
        identifier: email,
        password: password,
        returnSecureToken: true
      } 
    );
  }


}
