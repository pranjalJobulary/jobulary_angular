import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGoalsComponent } from './career-goals.component';

describe('CareerGoalsComponent', () => {
  let component: CareerGoalsComponent;
  let fixture: ComponentFixture<CareerGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
