import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAlphaComponent } from './pano-alpha.component';

describe('PanoAlphaComponent', () => {
  let component: PanoAlphaComponent;
  let fixture: ComponentFixture<PanoAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAlphaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
