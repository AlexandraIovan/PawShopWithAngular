import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public connection = [];

  constructor(private _lgService: LoginService) { }

  ngOnInit() {
    this.connection =  this._lgService.getconnection();
  }

}
