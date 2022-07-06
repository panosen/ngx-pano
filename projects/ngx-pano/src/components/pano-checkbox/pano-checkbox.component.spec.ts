import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoCheckboxComponent } from './pano-checkbox.component';

describe('PanoCheckboxComponent', () => {
  let component: PanoCheckboxComponent;
  let fixture: ComponentFixture<PanoCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
