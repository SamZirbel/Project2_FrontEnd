import { TestBed } from '@angular/core/testing';

import { QueryAPIService } from './query-api.service';

describe('QueryAPIService', () => {
  let service: QueryAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
