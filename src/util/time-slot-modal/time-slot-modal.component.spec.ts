import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotModalComponent } from './time-slot-modal.component';

describe('TimeSlotModalComponent', () => {
  let component: TimeSlotModalComponent;
  let fixture: ComponentFixture<TimeSlotModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSlotModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSlotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
