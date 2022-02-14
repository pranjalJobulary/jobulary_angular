import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStories2Component } from './car-stories2.component';

describe('CarStories2Component', () => {
  let component: CarStories2Component;
  let fixture: ComponentFixture<CarStories2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStories2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarStories2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
