import { TestBed, inject } from '@angular/core/testing';

import { MembreConnecterService } from './membre-connecter.service';

describe('MembreConnecterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembreConnecterService]
    });
  });

  it('should be created', inject([MembreConnecterService], (service: MembreConnecterService) => {
    expect(service).toBeTruthy();
  }));
});
