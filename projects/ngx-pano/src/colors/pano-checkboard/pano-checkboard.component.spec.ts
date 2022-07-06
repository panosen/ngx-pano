import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoCheckboardComponent } from './pano-checkboard.component';

describe('PanoCheckboardComponent', () => {
  let component: PanoCheckboardComponent;
  let fixture: ComponentFixture<PanoCheckboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoCheckboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoCheckboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
