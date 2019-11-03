import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.scss']
})
export class FormStep1Component implements OnInit {

  public parentForm;

  constructor(private parentControl: ControlContainer) {}

  ngOnInit() {
    this.parentForm = this.parentControl.control;
    console.log('step 1', this.parentControl);
  }
}
