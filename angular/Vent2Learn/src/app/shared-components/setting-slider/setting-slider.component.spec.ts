import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSliderComponent } from './setting-slider.component';

describe('SettingSliderComponent', () => {
  let component: SettingSliderComponent;
  let fixture: ComponentFixture<SettingSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
