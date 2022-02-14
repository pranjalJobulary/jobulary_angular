import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentBriefReportComponent } from './assessment-brief-report.component';

describe('AssessmentBriefReportComponent', () => {
  let component: AssessmentBriefReportComponent;
  let fixture: ComponentFixture<AssessmentBriefReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentBriefReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentBriefReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
