import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAlertComponent } from './pano-alert.component';

describe('PanoAlertComponent', () => {
  let component: PanoAlertComponent;
  let fixture: ComponentFixture<PanoAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
