import { TestBed, inject } from '@angular/core/testing';

import { ServiceMusiqueService } from './service-musique.service';

describe('ServiceMusiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMusiqueService]
    });
  });

  it('should be created', inject([ServiceMusiqueService], (service: ServiceMusiqueService) => {
    expect(service).toBeTruthy();
  }));
});
