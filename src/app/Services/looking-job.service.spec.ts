import { TestBed } from '@angular/core/testing';

import { LookingJobService } from './looking-job.service';

describe('LookingJobService', () => {
  let service: LookingJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookingJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
