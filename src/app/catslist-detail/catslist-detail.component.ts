import { Component, OnInit} from '@angular/core';
import {CatsListService} from '../cats-list.service';
@Component ({
    selector: 'catslist-detail',
    template: `
    <h1>Detailed list of Cats</h1>
    <ul *ngFor="let cat of Kittens">
    <li>{{cat.id}}. {{cat.name}} - {{cat.type}} </li>
  </ul>`,
    styles: []
})

export class CatsListDetailComponent implements OnInit {

    public Kittens = [];

    constructor(private _catsListService: CatsListService) {
    }

    ngOnInit(){

      this.Kittens = this._catsListService.getKittens();

    }
}