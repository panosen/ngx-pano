import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoSwatchComponent } from './pano-swatch.component';

describe('PanoSwatchComponent', () => {
  let component: PanoSwatchComponent;
  let fixture: ComponentFixture<PanoSwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoSwatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoSwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
