import { TestBed } from '@angular/core/testing';

import { AssessmentDetailsReportService } from './assessment-details-report.service';

describe('AssessmentDetailsReportService', () => {
  let service: AssessmentDetailsReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentDetailsReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
