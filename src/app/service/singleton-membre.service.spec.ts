import { TestBed, inject } from '@angular/core/testing';

import { SingletonMembreService } from './singleton-membre.service';

describe('SingletonMembreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingletonMembreService]
    });
  });

  it('should be created', inject([SingletonMembreService], (service: SingletonMembreService) => {
    expect(service).toBeTruthy();
  }));
});
