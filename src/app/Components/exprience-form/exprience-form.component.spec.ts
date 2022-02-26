import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprienceFormComponent } from './exprience-form.component';

describe('ExprienceFormComponent', () => {
  let component: ExprienceFormComponent;
  let fixture: ComponentFixture<ExprienceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExprienceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExprienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
