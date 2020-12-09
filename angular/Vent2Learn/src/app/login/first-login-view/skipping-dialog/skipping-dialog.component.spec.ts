import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkippingDialogComponent } from './skipping-dialog.component';

describe('SkippingDialogComponent', () => {
  let component: SkippingDialogComponent;
  let fixture: ComponentFixture<SkippingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkippingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkippingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
