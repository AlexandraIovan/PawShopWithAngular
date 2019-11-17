import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
      this._registerService.register(username, email,password).subscribe(resData => { console.log(resData);
        this.router.navigate(['/login']);
      }, error => {console.log(error);});
    form.reset(); //imi reseteaza butonul dupa ce trimit datele
  }


  public connection = [];

  constructor(private _registerService: RegisterService, private router: Router) {}

  ngOnInit() {
    this._registerService.getconnection()
        .subscribe(data =>this.connection = data);
  }

}
