import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoCardHeadComponent } from './pano-card-head.component';

describe('PanoCardHeadComponent', () => {
  let component: PanoCardHeadComponent;
  let fixture: ComponentFixture<PanoCardHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoCardHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoCardHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
