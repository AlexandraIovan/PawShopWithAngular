import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceRegister } from './interface-types';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  
  getregistration():Observable<InterfaceRegister[]>{
    return this.http.get<InterfaceRegister[]>("");

  }
}
