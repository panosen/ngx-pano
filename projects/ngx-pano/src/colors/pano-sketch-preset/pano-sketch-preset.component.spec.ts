import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoSketchPresetComponent } from './pano-sketch-preset.component';

describe('PanoSketchPresetComponent', () => {
  let component: PanoSketchPresetComponent;
  let fixture: ComponentFixture<PanoSketchPresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoSketchPresetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoSketchPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
