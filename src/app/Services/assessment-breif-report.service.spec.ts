import { TestBed } from '@angular/core/testing';

import { AssessmentBreifReportService } from './assessment-breif-report.service';

describe('AssessmentBreifReportService', () => {
  let service: AssessmentBreifReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentBreifReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
