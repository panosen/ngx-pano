import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoHeaderComponent } from './pano-header.component';

describe('PanoHeaderComponent', () => {
  let component: PanoHeaderComponent;
  let fixture: ComponentFixture<PanoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
