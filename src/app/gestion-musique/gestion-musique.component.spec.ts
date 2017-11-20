import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMusiqueComponent } from './gestion-musique.component';

describe('GestionMusiqueComponent', () => {
  let component: GestionMusiqueComponent;
  let fixture: ComponentFixture<GestionMusiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionMusiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
