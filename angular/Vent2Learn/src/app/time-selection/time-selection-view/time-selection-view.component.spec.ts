import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSelectionViewComponent } from './time-selection-view.component';

describe('TimeSelectionViewComponent', () => {
  let component: TimeSelectionViewComponent;
  let fixture: ComponentFixture<TimeSelectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSelectionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
