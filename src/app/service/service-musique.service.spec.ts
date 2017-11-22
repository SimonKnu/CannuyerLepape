import { TestBed, inject } from '@angular/core/testing';

import { MusiqueService } from './service-musique.service';

describe('ServiceMusiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusiqueService]
    });
  });

  it('should be created', inject([MusiqueService], (service: MusiqueService) => {
    expect(service).toBeTruthy();
  }));
});
