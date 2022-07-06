import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoSaturationComponent } from './pano-saturation.component';

describe('PanoSaturationComponent', () => {
  let component: PanoSaturationComponent;
  let fixture: ComponentFixture<PanoSaturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoSaturationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoSaturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
