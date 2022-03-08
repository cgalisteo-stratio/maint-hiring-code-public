import { TestBed } from '@angular/core/testing';

import { EuroService } from './euro.service';

describe('EuroService', () => {
  let service: EuroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
