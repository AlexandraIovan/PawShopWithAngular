import { Component, OnInit } from '@angular/core';
import {AdoptionService} from '../adoption.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {

  public adoptions = [];

  constructor(private _adoptionService: AdoptionService) { }

  ngOnInit() {
    this._adoptionService.getadoptions()
        .subscribe(data => this.adoptions = data);

  }

}
