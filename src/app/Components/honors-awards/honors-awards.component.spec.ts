import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorsAwardsComponent } from './honors-awards.component';

describe('HonorsAwardsComponent', () => {
  let component: HonorsAwardsComponent;
  let fixture: ComponentFixture<HonorsAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonorsAwardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorsAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
