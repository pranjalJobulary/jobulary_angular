import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStories1Component } from './car-stories1.component';

describe('CarStories1Component', () => {
  let component: CarStories1Component;
  let fixture: ComponentFixture<CarStories1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStories1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarStories1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
