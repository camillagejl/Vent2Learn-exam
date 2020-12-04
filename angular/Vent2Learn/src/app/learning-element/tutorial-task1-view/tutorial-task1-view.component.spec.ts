import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTask1ViewComponent } from './tutorial-task1-view.component';

describe('TutorialTask1ViewComponent', () => {
  let component: TutorialTask1ViewComponent;
  let fixture: ComponentFixture<TutorialTask1ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialTask1ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialTask1ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
