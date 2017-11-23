import { TestBed, inject } from '@angular/core/testing';

import { PlaylistService } from './service-playlist.service';

describe('MusiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistService]
    });
  });

  it('should be created', inject([PlaylistService], (service: PlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
