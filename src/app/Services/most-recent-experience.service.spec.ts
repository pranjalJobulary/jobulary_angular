import { TestBed } from '@angular/core/testing';

import { MostRecentExperienceService } from './most-recent-experience.service';

describe('MostRecentExperienceService', () => {
  let service: MostRecentExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostRecentExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
