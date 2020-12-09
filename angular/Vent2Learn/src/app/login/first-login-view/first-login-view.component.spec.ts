import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLoginViewComponent } from './first-login-view.component';

describe('FirstLoginViewComponent', () => {
  let component: FirstLoginViewComponent;
  let fixture: ComponentFixture<FirstLoginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLoginViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
