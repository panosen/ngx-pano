import { TestBed } from '@angular/core/testing';

import { PanoLayoutDirectionService } from './pano-layout-direction.service';

describe('PanoLayoutDirectionService', () => {
  let service: PanoLayoutDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanoLayoutDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
