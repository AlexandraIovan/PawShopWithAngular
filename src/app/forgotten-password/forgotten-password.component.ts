import { Component, OnInit } from '@angular/core';
import { ForgottenPasswordService } from '../forgotten-password.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  public password = [];

  constructor(private _passService: ForgottenPasswordService) { }

  ngOnInit() {
    this.password = this._passService.getpassword();
  }

}
