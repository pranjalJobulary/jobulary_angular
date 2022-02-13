import { TestBed } from '@angular/core/testing';

import { BasicdetailsService } from './basicdetails.service';

describe('BasicdetailsService', () => {
  let service: BasicdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
