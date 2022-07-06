import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoCardFootComponent } from './pano-card-foot.component';

describe('PanoCardFootComponent', () => {
  let component: PanoCardFootComponent;
  let fixture: ComponentFixture<PanoCardFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoCardFootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoCardFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
