import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoLayoutComponent } from './pano-layout.component';

describe('PanoLayoutComponent', () => {
  let component: PanoLayoutComponent;
  let fixture: ComponentFixture<PanoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
