import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTask2ViewComponent } from './tutorial-task2-view.component';

describe('TutorialTask2ViewComponent', () => {
  let component: TutorialTask2ViewComponent;
  let fixture: ComponentFixture<TutorialTask2ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialTask2ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialTask2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
