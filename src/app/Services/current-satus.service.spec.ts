import { TestBed } from '@angular/core/testing';

import { CurrentStatusService } from './current-satus.service';

describe('CurrentSatusService', () => {
  let service: CurrentStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
