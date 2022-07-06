import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoPaletteComponent } from './pano-palette.component';

describe('PanoPaletteComponent', () => {
  let component: PanoPaletteComponent;
  let fixture: ComponentFixture<PanoPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoPaletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
