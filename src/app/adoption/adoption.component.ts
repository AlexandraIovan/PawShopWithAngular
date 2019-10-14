import { Component, OnInit } from '@angular/core';
import {AdoptionService} from '../adoption.service';

@Component({
  selector: 'app-adoption',
  template:`
  <ul *ngFor="let feline of adoptions">
  <li>{{feline.name}} - {{feline.description}}</li>
  </ul>
  `,
  styles:[]
})
export class AdoptionComponent implements OnInit {

  public adoptions = [];

  constructor(private _adoptionService: AdoptionService) { }

  ngOnInit() {
    this._adoptionService.getadoptions()
        .subscribe(data => this.adoptions = data);

  }

}
