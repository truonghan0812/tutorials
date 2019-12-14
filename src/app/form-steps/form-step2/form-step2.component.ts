import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-form-step2',
  templateUrl: './form-step2.component.html',
  styleUrls: ['./form-step2.component.scss']
})
export class FormStep2Component implements OnInit {

  public parentForm;

  constructor(private parentFormControl: ControlContainer) { 
  }

  ngOnInit() {
    this.parentForm = this.parentFormControl.control;
    console.log('step 2', this.parentForm);
  }

}
