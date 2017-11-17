import { TestBed, inject } from '@angular/core/testing';

import { ServiceConnexionService } from './service-connexion.service';

describe('ServiceConnexionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceConnexionService]
    });
  });

  it('should be created', inject([ServiceConnexionService], (service: ServiceConnexionService) => {
    expect(service).toBeTruthy();
  }));
});
