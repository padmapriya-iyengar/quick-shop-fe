import { TestBed } from '@angular/core/testing';

import { QuickshopService } from './quickshop.service';

describe('QuickshopService', () => {
  let service: QuickshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
