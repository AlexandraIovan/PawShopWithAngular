import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceLogin } from './interface-types';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url:string = "";

  constructor(private http:HttpClient) { }

  getconnection():Observable<InterfaceLogin[]>{
    return this.http.get<InterfaceLogin[]>("");
  }

  signup(email: string, password: string){
    return this.http.post<InterfaceLogin>('AICI VINE LINKUL DE PE HEROKU',
      {
        email: email,
        password: password,
        returnSecureToken: true
      } 
    );
  }


}
