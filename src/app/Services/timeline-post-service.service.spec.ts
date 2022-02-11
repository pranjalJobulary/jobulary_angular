import { TestBed } from '@angular/core/testing';

import { TimelinePostServiceService } from './timeline-post-service.service';

describe('TimelinePostServiceService', () => {
  let service: TimelinePostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelinePostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
