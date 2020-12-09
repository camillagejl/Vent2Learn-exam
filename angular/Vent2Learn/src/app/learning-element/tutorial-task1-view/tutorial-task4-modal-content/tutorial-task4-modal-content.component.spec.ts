import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTask4ModalContentComponent } from './tutorial-task4-modal-content.component';

describe('TutorialTask4ModalContentComponent', () => {
  let component: TutorialTask4ModalContentComponent;
  let fixture: ComponentFixture<TutorialTask4ModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialTask4ModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialTask4ModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
