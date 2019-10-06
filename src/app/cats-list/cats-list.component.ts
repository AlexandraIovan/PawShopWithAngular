import { Component, OnInit } from '@angular/core';
import {CatsListService} from '../cats-list.service';

@Component({
  selector: 'app-cats-list',
  template: `
  <h1> List of the cats for sale</h1>
  <ul *ngFor="let cat of Kittens">
    <li>{{cat.name}}<img style="width: 100px; height: auto;" src={{cat.image.url}} /></li>
  </ul>
  `,
  styles: []
})
export class CatsListComponent implements OnInit {

  public Kittens = [];


  constructor(private _CatsListService: CatsListService) { }

  ngOnInit() {
    const that = this;
    this._CatsListService.getKittens()
        //.subscribe(data =>this.Kittens = data);
        .subscribe(function(data) { that.Kittens = data });
    
  
  }

}
