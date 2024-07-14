import { TestBed } from '@angular/core/testing';

import { CurrencyDataServiceService } from './currency-data-service.service';

describe('CurrencyDataServiceService', () => {
  let service: CurrencyDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
