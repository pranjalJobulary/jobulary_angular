import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereYouAreLocated2Component } from './where-you-are-located2.component';

describe('WhereYouAreLocated2Component', () => {
  let component: WhereYouAreLocated2Component;
  let fixture: ComponentFixture<WhereYouAreLocated2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereYouAreLocated2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereYouAreLocated2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
