import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningDashboardComponent } from './e-learning-dashboard.component';

describe('ELearningDashboardComponent', () => {
  let component: ELearningDashboardComponent;
  let fixture: ComponentFixture<ELearningDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELearningDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
