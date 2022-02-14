import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStories3Component } from './car-stories3.component';

describe('CarStories3Component', () => {
  let component: CarStories3Component;
  let fixture: ComponentFixture<CarStories3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStories3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarStories3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
