import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoRadioComponent } from './pano-radio.component';

describe('PanoRadioComponent', () => {
  let component: PanoRadioComponent;
  let fixture: ComponentFixture<PanoRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
