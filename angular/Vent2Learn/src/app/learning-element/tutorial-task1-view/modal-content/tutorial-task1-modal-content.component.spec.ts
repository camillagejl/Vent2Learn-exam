import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTask1ModalContentComponent } from './tutorial-task1-modal-content.component';

describe('ModalContentComponent', () => {
  let component: TutorialTask1ModalContentComponent;
  let fixture: ComponentFixture<TutorialTask1ModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialTask1ModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialTask1ModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
