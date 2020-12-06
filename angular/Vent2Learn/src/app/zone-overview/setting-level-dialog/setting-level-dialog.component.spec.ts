import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLevelDialogComponent } from './setting-level-dialog.component';

describe('SettingLevelDialogComponent', () => {
  let component: SettingLevelDialogComponent;
  let fixture: ComponentFixture<SettingLevelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingLevelDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingLevelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
