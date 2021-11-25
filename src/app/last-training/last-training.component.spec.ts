import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTrainingComponent } from './last-training.component';

describe('LastTrainingComponent', () => {
  let component: LastTrainingComponent;
  let fixture: ComponentFixture<LastTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
