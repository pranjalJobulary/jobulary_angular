import { TestBed } from '@angular/core/testing';

import { HonorawardsService } from './honorawards.service';

describe('HonorawardsService', () => {
  let service: HonorawardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HonorawardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
