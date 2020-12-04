import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialStartingViewComponent } from './tutorial-starting-view.component';

describe('TutorialStartingViewComponent', () => {
  let component: TutorialStartingViewComponent;
  let fixture: ComponentFixture<TutorialStartingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialStartingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialStartingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
