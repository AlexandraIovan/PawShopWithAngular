import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats-list',
  template: `
  <h1> List of the cats for sale</h1>
  <ul *ngFor="let cats-list of Kittens">
    <li>{{cat.name}}</li>
  </ul>
  `,
  styles: []
})
export class CatsListComponent implements OnInit {

  public Kittens = [];


  constructor(private _CatsListService: CatsListService) { }

  ngOnInit() {
    this.Kittens = this._CatsListService.getKittens()
  }

}
