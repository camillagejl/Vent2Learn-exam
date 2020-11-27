import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentSettingComponent } from './vent-setting.component';

describe('VentSettingComponent', () => {
  let component: VentSettingComponent;
  let fixture: ComponentFixture<VentSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
