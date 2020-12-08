import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoDialogComponent } from './login-info-dialog.component';

describe('LoginInfoDialogComponent', () => {
  let component: LoginInfoDialogComponent;
  let fixture: ComponentFixture<LoginInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
