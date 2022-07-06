import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoIconComponent } from './pano-icon.component';

describe('PanoIconComponent', () => {
  let component: PanoIconComponent;
  let fixture: ComponentFixture<PanoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
