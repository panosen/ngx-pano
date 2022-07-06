import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoDatepickerComponent } from './pano-datepicker.component';

describe('PanoDatepickerComponent', () => {
  let component: PanoDatepickerComponent;
  let fixture: ComponentFixture<PanoDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
