import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccepteComponent } from './modal-accepte.component';

describe('ModalAccepteComponent', () => {
  let component: ModalAccepteComponent;
  let fixture: ComponentFixture<ModalAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
