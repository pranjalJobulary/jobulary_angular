import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentJobTitleComponent } from './most-recent-job-title.component';

describe('MostRecentJobTitleComponent', () => {
  let component: MostRecentJobTitleComponent;
  let fixture: ComponentFixture<MostRecentJobTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostRecentJobTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentJobTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
