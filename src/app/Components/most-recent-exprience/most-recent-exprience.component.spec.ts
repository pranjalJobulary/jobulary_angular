import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentExprienceComponent } from './most-recent-exprience.component';

describe('MostRecentExprienceComponent', () => {
  let component: MostRecentExprienceComponent;
  let fixture: ComponentFixture<MostRecentExprienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostRecentExprienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentExprienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
