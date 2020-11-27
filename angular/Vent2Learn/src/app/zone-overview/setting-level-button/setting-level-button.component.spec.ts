import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLevelButtonComponent } from './setting-level-button.component';

describe('SettingLevelButtonComponent', () => {
  let component: SettingLevelButtonComponent;
  let fixture: ComponentFixture<SettingLevelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingLevelButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingLevelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
