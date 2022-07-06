import { TestBed } from '@angular/core/testing';

import { NgxPanoService } from './ngx-pano.service';

describe('NgxPanoService', () => {
  let service: NgxPanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
