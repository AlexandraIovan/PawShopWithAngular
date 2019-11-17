import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceRegister } from './interface-types';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _url:string = "http://pawshop.herokuapp.com/auth/local/register";

  constructor(private http:HttpClient) { }

  getconnection():Observable<InterfaceRegister[]>{
    return this.http.get<InterfaceRegister[]>("");
  }

  register(username: string, email: string, password: string){
    return this.http.post<InterfaceRegister>(this._url,
      {
        username: username,
        email: email,
        password: password
      } 
    );
  }


}
