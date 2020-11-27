import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneOverviewViewComponent } from './zone-overview-view.component';

describe('ZoneOverviewViewComponent', () => {
  let component: ZoneOverviewViewComponent;
  let fixture: ComponentFixture<ZoneOverviewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneOverviewViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneOverviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
