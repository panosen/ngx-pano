import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoLayoutHeadComponent } from './pano-layout-head.component';

describe('PanoLayoutHeadComponent', () => {
  let component: PanoLayoutHeadComponent;
  let fixture: ComponentFixture<PanoLayoutHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoLayoutHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoLayoutHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
