import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPlaylistComponent } from './gestion-playlist.component';

describe('GestionPlaylistComponent', () => {
  let component: GestionPlaylistComponent;
  let fixture: ComponentFixture<GestionPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
