import { Component, OnInit} from '@angular/core';

@Component ({
    selector: 'catslist-detail',
    template: `
    <h1>Detailed list of Cats</h1>
    <ul *ngFor="let cat of Kittens">
    <li>{{cat.id}}. {{cat.name}} - {{cat.class}} </li>
  </ul>`,
    styles: []
})

export class CatsListDetailComponent implements OnInit {

    public Kittens = [];

    constructor() {}

    ngOnInit(){

    }
}