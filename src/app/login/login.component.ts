import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode = true;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    //chestia asta returneaza valoarea.se schimba starea la loginMode din true in false si invers.
  }
  onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode){
      //...
    } else {
      this._lgService.signup(email,password).subscribe(resData => { console.log(resData);}, error => {console.log(error);});
    }
    form.reset(); //imi reseteaza butonul dupa ce trimit datele
  }


  public connection = [];

  constructor(private _lgService: LoginService) {}

  ngOnInit() {
    this._lgService.getconnection()
        .subscribe(data =>this.connection = data);
  }

}
