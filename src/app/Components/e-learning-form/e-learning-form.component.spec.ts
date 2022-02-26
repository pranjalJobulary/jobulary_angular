import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningFormComponent } from './e-learning-form.component';

describe('ELearningFormComponent', () => {
  let component: ELearningFormComponent;
  let fixture: ComponentFixture<ELearningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELearningFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
