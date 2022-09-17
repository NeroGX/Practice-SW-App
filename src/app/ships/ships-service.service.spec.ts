import { TestBed } from '@angular/core/testing';

import { ShipsServiceService } from './ships-service.service';

describe('ShipsServiceService', () => {
  let service: ShipsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
