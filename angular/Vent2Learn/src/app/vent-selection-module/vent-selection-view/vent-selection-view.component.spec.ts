import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentSelectionViewComponent } from './vent-selection-view.component';

describe('VentSelectionViewComponent', () => {
  let component: VentSelectionViewComponent;
  let fixture: ComponentFixture<VentSelectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentSelectionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentSelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
