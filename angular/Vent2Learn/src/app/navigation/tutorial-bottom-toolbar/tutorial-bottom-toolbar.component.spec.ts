import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialBottomToolbarComponent } from './tutorial-bottom-toolbar.component';

describe('TutorialBottomToolbarComponent', () => {
  let component: TutorialBottomToolbarComponent;
  let fixture: ComponentFixture<TutorialBottomToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialBottomToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialBottomToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
