import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTask3ModalContentComponent } from './tutorial-task3-modal-content.component';

describe('TutorialTask3ModalContentComponent', () => {
  let component: TutorialTask3ModalContentComponent;
  let fixture: ComponentFixture<TutorialTask3ModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialTask3ModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialTask3ModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
