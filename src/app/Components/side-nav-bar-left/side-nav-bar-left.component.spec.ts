import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBarLeftComponent } from './side-nav-bar-left.component';

describe('SideNavBarLeftComponent', () => {
  let component: SideNavBarLeftComponent;
  let fixture: ComponentFixture<SideNavBarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavBarLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavBarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
