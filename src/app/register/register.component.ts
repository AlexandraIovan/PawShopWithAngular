import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public registration = [];

  constructor(private _registrationService: RegisterService) { }

  ngOnInit() {
    this._registrationService.getregistration()
        .subscribe(data =>this.registration = data);

  }

}
