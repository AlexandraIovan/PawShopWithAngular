import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceFPassword } from './interface-types';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForgottenPasswordService {

  constructor(private http:HttpClient) { }
  
  getpassword():Observable<InterfaceFPassword[]>{
    return this.http.get<InterfaceFPassword[]>("");

  }
}
