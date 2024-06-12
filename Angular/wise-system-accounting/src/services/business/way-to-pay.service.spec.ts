import { TestBed } from '@angular/core/testing';

import { WayToPayService } from './way-to-pay.service';

describe('WayToPayService', () => {
  let service: WayToPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WayToPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
