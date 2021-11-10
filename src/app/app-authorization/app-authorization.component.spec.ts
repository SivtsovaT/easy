import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthorizationComponent } from './app-authorization.component';

describe('AppAuthorizationComponent', () => {
  let component: AppAuthorizationComponent;
  let fixture: ComponentFixture<AppAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
