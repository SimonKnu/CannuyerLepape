import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesmusiquesComponent } from './mesmusiques.component';

describe('MesmusiquesComponent', () => {
  let component: MesmusiquesComponent;
  let fixture: ComponentFixture<MesmusiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesmusiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesmusiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
