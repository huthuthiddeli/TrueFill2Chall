import { TestBed } from '@angular/core/testing';

import { HistoryFetcherService } from './history-fetcher.service';

describe('HistoryFetcherService', () => {
  let service: HistoryFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
