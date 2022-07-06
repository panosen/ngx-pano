import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoCardComponent } from './pano-card.component';

describe('PanoCardComponent', () => {
  let component: PanoCardComponent;
  let fixture: ComponentFixture<PanoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
