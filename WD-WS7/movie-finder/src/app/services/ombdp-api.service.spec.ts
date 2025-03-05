import { TestBed } from '@angular/core/testing';

import { OmbdpApiService } from './ombdp-api.service';

describe('OmbdpApiService', () => {
  let service: OmbdpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmbdpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
