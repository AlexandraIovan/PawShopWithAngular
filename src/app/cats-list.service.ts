import { Injectable } from '@angular/core';

@Injectable()
export class CatsListService {

  constructor() { }

  getKittens() {
    
    return [
      {id: 1, name: 'Bengaleză', type: 'pisică de casă'},
      {id: 2, name: 'Siameza', type: 'pisica de casa'},
      {id: 3, name: 'Albastru de Rusia', type: 'pisica de casa'},
      {id: 4, name: 'Persana', type: 'pisica de casa'}
    ];
  }
}
