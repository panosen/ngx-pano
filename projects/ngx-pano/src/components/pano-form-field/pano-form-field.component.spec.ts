import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoFormFieldComponent } from './pano-form-field.component';

describe('PanoFormFieldComponent', () => {
  let component: PanoFormFieldComponent;
  let fixture: ComponentFixture<PanoFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoFormFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
