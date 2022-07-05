import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPanoComponent } from './ngx-pano.component';

describe('NgxPanoComponent', () => {
  let component: NgxPanoComponent;
  let fixture: ComponentFixture<NgxPanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
