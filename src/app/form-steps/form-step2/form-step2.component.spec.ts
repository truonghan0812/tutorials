import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep2Component } from './form-step2.component';

describe('FormStep2Component', () => {
  let component: FormStep2Component;
  let fixture: ComponentFixture<FormStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
