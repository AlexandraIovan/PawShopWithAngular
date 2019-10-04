import { TestBed } from '@angular/core/testing';

import { CatsListService } from './cats-list.service';

describe('CatsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatsListService = TestBed.get(CatsListService);
    expect(service).toBeTruthy();
  });
});
