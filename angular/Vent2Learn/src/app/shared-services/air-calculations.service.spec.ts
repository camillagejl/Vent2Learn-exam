import { TestBed } from '@angular/core/testing';

import { AirCalculationsService } from './air-calculations.service';

describe('AirCalculationsService', () => {
  let service: AirCalculationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirCalculationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
