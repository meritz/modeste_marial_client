import { TestBed } from '@angular/core/testing';

import { PriereService } from './priere.service';

describe('PriereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriereService = TestBed.get(PriereService);
    expect(service).toBeTruthy();
  });
});
