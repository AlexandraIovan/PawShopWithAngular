import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
      this._lgService.login(email,password).subscribe(resData => { console.log(resData);
        // din object in string
        localStorage.setItem("pawshop", JSON.stringify(resData));
        // din string in object
        // const userData = JSON.parse(localStorage.getItem("pawshop"));
        this.router.navigate(['/']);
        // dupa ce imi vin datele si pun resData pe local storage, navighez la HomeComponent
        // '/' e chestia asta     { path: '', component: HomeComponent } si ma duce la HomeComponent

        
      }, error => {console.log(error);});
    form.reset(); //imi reseteaza butonul dupa ce trimit datele
  }


  public connection = [];

  constructor(private _lgService: LoginService, private router: Router) {}

  ngOnInit() {
    this._lgService.getconnection()
        .subscribe(data =>this.connection = data);
  }

}
