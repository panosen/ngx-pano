import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoTimepickerComponent } from './pano-timepicker.component';

describe('PanoTimepickerComponent', () => {
  let component: PanoTimepickerComponent;
  let fixture: ComponentFixture<PanoTimepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoTimepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
