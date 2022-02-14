import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereYouAreLocatedComponent } from './where-you-are-located.component';

describe('WhereYouAreLocatedComponent', () => {
  let component: WhereYouAreLocatedComponent;
  let fixture: ComponentFixture<WhereYouAreLocatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereYouAreLocatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereYouAreLocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
