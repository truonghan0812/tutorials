import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-manage-state',
  templateUrl: './manage-state.component.html',
  styleUrls: ['./manage-state.component.scss']
})
export class ManageStateComponent implements OnInit {

  public initItems:Array<String> = ['🍎','🍎','🍎','🍎','🍎'];
  public items$:Observable<String[]>;
  constructor() {}

  ngOnInit() {
    this.items$ = of((this.initItems));
  }

  addItem($event){
    this.initItems.push('🍎');
  }
  removeItem($event){
    this.initItems.pop();
  }
  refresh($event){
    this.initItems = ['🍎','🍎','🍎','🍎','🍎'];
    this.items$ = of((this.initItems));
  }
}
