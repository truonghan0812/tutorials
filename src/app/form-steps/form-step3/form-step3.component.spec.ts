import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep3Component } from './form-step3.component';

describe('FormStep3Component', () => {
  let component: FormStep3Component;
  let fixture: ComponentFixture<FormStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
