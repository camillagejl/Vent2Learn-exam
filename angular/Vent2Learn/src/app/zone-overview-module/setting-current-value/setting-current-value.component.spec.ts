import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCurrentValueComponent } from './setting-current-value.component';

describe('SettingCurrentValueComponent', () => {
  let component: SettingCurrentValueComponent;
  let fixture: ComponentFixture<SettingCurrentValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingCurrentValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCurrentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
