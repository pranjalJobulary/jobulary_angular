import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardLevelExprienceComponent } from './board-level-exprience.component';

describe('BoardLevelExprienceComponent', () => {
  let component: BoardLevelExprienceComponent;
  let fixture: ComponentFixture<BoardLevelExprienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardLevelExprienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardLevelExprienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
