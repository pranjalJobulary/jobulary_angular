import { TestBed } from '@angular/core/testing';

import { CareergoalsService } from './careergoals.service';

describe('CareergoalsService', () => {
  let service: CareergoalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareergoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
