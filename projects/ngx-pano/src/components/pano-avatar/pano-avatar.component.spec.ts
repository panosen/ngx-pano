import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAvatarComponent } from './pano-avatar.component';

describe('PanoAvatarComponent', () => {
  let component: PanoAvatarComponent;
  let fixture: ComponentFixture<PanoAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
