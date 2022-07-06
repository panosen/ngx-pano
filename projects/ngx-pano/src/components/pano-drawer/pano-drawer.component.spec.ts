import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoDrawerComponent } from './pano-drawer.component';

describe('PanoDrawerComponent', () => {
  let component: PanoDrawerComponent;
  let fixture: ComponentFixture<PanoDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
