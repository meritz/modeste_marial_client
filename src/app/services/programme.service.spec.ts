import { TestBed } from '@angular/core/testing';

import { ProgrammeService } from './programme.service';

describe('ProgrammeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgrammeService = TestBed.get(ProgrammeService);
    expect(service).toBeTruthy();
  });
});
