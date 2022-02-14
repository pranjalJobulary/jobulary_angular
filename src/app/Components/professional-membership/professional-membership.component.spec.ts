import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalMembershipComponent } from './professional-membership.component';

describe('ProfessionalMembershipComponent', () => {
  let component: ProfessionalMembershipComponent;
  let fixture: ComponentFixture<ProfessionalMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
