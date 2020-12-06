import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentZoneValueComponent } from './current-zone-value.component';

describe('SettingCurrentValueComponent', () => {
  let component: CurrentZoneValueComponent;
  let fixture: ComponentFixture<CurrentZoneValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentZoneValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentZoneValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
