import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAutocompleteComponent } from './pano-autocomplete.component';

describe('PanoAutocompleteComponent', () => {
  let component: PanoAutocompleteComponent;
  let fixture: ComponentFixture<PanoAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
