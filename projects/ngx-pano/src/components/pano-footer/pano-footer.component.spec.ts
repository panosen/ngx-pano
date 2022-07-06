import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoFooterComponent } from './pano-footer.component';

describe('PanoFooterComponent', () => {
  let component: PanoFooterComponent;
  let fixture: ComponentFixture<PanoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
