import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBarRightComponent } from './side-nav-bar-right.component';

describe('SideNavBarRightComponent', () => {
  let component: SideNavBarRightComponent;
  let fixture: ComponentFixture<SideNavBarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavBarRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavBarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
