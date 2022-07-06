import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoLayoutMainComponent } from './pano-layout-main.component';

describe('PanoLayoutMainComponent', () => {
  let component: PanoLayoutMainComponent;
  let fixture: ComponentFixture<PanoLayoutMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoLayoutMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
