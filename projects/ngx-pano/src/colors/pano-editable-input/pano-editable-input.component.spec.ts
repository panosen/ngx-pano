import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoEditableInputComponent } from './pano-editable-input.component';

describe('PanoEditableInputComponent', () => {
  let component: PanoEditableInputComponent;
  let fixture: ComponentFixture<PanoEditableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoEditableInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoEditableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
