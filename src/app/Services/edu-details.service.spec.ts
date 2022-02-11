import { TestBed } from '@angular/core/testing';

import { EduDetailsService } from './edu-details.service';

describe('EduDetailsService', () => {
  let service: EduDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
