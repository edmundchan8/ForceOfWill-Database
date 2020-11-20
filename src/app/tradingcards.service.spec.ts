import { TestBed } from '@angular/core/testing';

import { TradingcardsService } from './tradingcards.service';

describe('TradingcardsService', () => {
  let service: TradingcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradingcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
