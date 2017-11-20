import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMusiqueComponent } from './modifier-musique.component';

describe('ModifierMusiqueComponent', () => {
  let component: ModifierMusiqueComponent;
  let fixture: ComponentFixture<ModifierMusiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMusiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
