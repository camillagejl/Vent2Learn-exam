import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentSelectionDialogComponent } from './vent-selection-dialog.component';

describe('VentSelectionDialogComponent', () => {
  let component: VentSelectionDialogComponent;
  let fixture: ComponentFixture<VentSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentSelectionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
