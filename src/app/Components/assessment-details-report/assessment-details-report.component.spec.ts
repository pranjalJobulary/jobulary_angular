import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentDetailsReportComponent } from './assessment-details-report.component';

describe('AssessmentDetailsReportComponent', () => {
  let component: AssessmentDetailsReportComponent;
  let fixture: ComponentFixture<AssessmentDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentDetailsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
