import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgottenPasswordService {

  constructor(private http:HttpClient) { }
  
  getpassword(){
    return this.http.get("");

  }
}
