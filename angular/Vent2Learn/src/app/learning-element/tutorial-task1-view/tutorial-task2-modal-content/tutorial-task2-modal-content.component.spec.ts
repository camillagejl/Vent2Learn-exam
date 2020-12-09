import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTask2ModalContentComponent } from './tutorial-task2-modal-content.component';

describe('TutorialTask2ModalContentComponent', () => {
  let component: TutorialTask2ModalContentComponent;
  let fixture: ComponentFixture<TutorialTask2ModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialTask2ModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialTask2ModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
