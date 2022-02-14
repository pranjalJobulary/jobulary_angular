import { TestBed } from '@angular/core/testing';

import { BackgroundimageserviceService } from './backgroundimageservice.service';

describe('BackgroundimageserviceService', () => {
  let service: BackgroundimageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundimageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
