import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialEndingViewComponent } from './tutorial-ending-view.component';

describe('TutorialEndingViewComponent', () => {
  let component: TutorialEndingViewComponent;
  let fixture: ComponentFixture<TutorialEndingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialEndingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialEndingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
