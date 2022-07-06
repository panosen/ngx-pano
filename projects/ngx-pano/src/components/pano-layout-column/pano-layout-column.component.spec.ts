import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoLayoutColumnComponent } from './pano-layout-column.component';

describe('PanoLayoutColumnComponent', () => {
  let component: PanoLayoutColumnComponent;
  let fixture: ComponentFixture<PanoLayoutColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoLayoutColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoLayoutColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
