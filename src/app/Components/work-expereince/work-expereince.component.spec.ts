import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpereinceComponent } from './work-expereince.component';

describe('WorkExpereinceComponent', () => {
  let component: WorkExpereinceComponent;
  let fixture: ComponentFixture<WorkExpereinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExpereinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpereinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
