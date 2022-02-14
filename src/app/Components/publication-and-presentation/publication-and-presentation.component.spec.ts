import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAndPresentationComponent } from './publication-and-presentation.component';

describe('PublicationAndPresentationComponent', () => {
  let component: PublicationAndPresentationComponent;
  let fixture: ComponentFixture<PublicationAndPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationAndPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationAndPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
