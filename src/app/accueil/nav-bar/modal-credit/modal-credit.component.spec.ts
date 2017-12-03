import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreditComponent } from './modal-credit.component';

describe('ModalCreditComponent', () => {
  let component: ModalCreditComponent;
  let fixture: ComponentFixture<ModalCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
