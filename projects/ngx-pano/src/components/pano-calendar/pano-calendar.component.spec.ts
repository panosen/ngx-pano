import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoCalendarComponent } from './pano-calendar.component';

describe('PanoCalendarComponent', () => {
  let component: PanoCalendarComponent;
  let fixture: ComponentFixture<PanoCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
