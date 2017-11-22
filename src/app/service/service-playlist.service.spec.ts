import { TestBed, inject } from '@angular/core/testing';

import { ServicePlaylistService } from './service-playlist.service';

describe('ServicePlaylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePlaylistService]
    });
  });

  it('should be created', inject([ServicePlaylistService], (service: ServicePlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
