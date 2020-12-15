import { TestBed } from '@angular/core/testing';

import { BoosterCardsService } from './booster-cards.service';

describe('BoosterCardsService', () => {
  let service: BoosterCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoosterCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
