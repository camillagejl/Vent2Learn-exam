import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentSelectionDropdownsComponent } from './vent-selection-dropdowns.component';

describe('VentSelectionDropdownsComponent', () => {
  let component: VentSelectionDropdownsComponent;
  let fixture: ComponentFixture<VentSelectionDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentSelectionDropdownsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentSelectionDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
