import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosComponent } from './jos.component';

describe('JosComponent', () => {
  let component: JosComponent;
  let fixture: ComponentFixture<JosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
