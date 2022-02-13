import { TestBed } from '@angular/core/testing';

import { CarStoryService } from './car-story.service';

describe('CarStoryService', () => {
  let service: CarStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
