import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastRequestComponent } from './past-request.component';

describe('PastRequestComponent', () => {
  let component: PastRequestComponent;
  let fixture: ComponentFixture<PastRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
