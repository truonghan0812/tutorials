import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-form-step3',
  templateUrl: './form-step3.component.html',
  styleUrls: ['./form-step3.component.scss']
})
export class FormStep3Component implements OnInit {

  public parentForm;
  // public queens$: Observable<Iqueen[]>;
  // public lipsyncs$: Observable<any[]>;
  public lipSyncFormArray;

  constructor(
    private parentFormControl: ControlContainer,
    // private seasonService: SeasonService
  ) { 
  }

  ngOnInit() {
    this.parentForm = this.parentFormControl.control;
    this.lipSyncFormArray = this.parentForm.get('favorite_lipsyncs');
    console.log('queens', this.lipSyncFormArray);
    // this.queens$ = this.seasonService.getQueens();

    // this.lipsyncs$ = this.seasonService.getLipsyncs();
  }

  removeLipsync(i) {
    this.lipSyncFormArray.removeAt(i)
  }

  addLipsync() {
    let length = this.lipSyncFormArray.controls.length;
    console.log('len', length);
    this.lipSyncFormArray.insert(length, new FormGroup({
      lipsync: new FormControl(''),
      ranking: new FormControl('0')
    }))
  }

}
