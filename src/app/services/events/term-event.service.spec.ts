import { TestBed } from '@angular/core/testing';

import { TermEventService } from './term-event.service';

describe('TermEventService', () => {
  let service: TermEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
