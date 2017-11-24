import { TestBed, inject } from '@angular/core/testing';

import { PlaylistmusiqueService } from './playlistmusique.service';

describe('PlaylistmusiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistmusiqueService]
    });
  });

  it('should be created', inject([PlaylistmusiqueService], (service: PlaylistmusiqueService) => {
    expect(service).toBeTruthy();
  }));
});
