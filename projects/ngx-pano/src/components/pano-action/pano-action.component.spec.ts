import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoActionComponent } from './pano-action.component';

describe('PanoActionComponent', () => {
  let component: PanoActionComponent;
  let fixture: ComponentFixture<PanoActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
