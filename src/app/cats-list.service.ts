import { Injectable } from '@angular/core';

@Injectable(
  //{providedIn: 'root'}
)
export class CatsListService {

  constructor() { }

  getKittens(){
    return [
      {"id":1, "name":"Bengaleză", "class":"pisică de casă"},
        {"id":2, "name":"Siameza", "class":"pisica de casa"},
        {"id":3, "name":"Albastru de Rusia", "class":"pisica de casa"},
        {"id":4, "name":"Persana", "class":"pisica de casa"}
    ];
  }
}
