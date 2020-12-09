import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTaskViewComponent } from './tutorial-task-view.component';

describe('TutorialTask1ViewComponent', () => {
  let component: TutorialTaskViewComponent;
  let fixture: ComponentFixture<TutorialTaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialTaskViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
