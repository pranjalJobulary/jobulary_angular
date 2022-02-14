import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCertificateComponent } from './assessment-certificate.component';

describe('AssessmentCertificateComponent', () => {
  let component: AssessmentCertificateComponent;
  let fixture: ComponentFixture<AssessmentCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
