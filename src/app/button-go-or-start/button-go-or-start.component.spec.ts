import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGoOrStartComponent } from './button-go-or-start.component';

describe('ButtonGoOrStartComponent', () => {
  let component: ButtonGoOrStartComponent;
  let fixture: ComponentFixture<ButtonGoOrStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGoOrStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGoOrStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
