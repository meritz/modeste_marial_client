import { TestBed } from '@angular/core/testing';

import { RadioplayService } from './radioplay.service';

describe('RadioplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadioplayService = TestBed.get(RadioplayService);
    expect(service).toBeTruthy();
  });
});
