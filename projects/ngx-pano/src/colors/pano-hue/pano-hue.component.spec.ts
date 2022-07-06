import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoHueComponent } from './pano-hue.component';

describe('PanoHueComponent', () => {
  let component: PanoHueComponent;
  let fixture: ComponentFixture<PanoHueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoHueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoHueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
