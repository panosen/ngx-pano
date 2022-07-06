import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoCardBodyComponent } from './pano-card-body.component';

describe('PanoCardBodyComponent', () => {
  let component: PanoCardBodyComponent;
  let fixture: ComponentFixture<PanoCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoCardBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
