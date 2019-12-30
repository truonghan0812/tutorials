import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit, ModuleState, getSelectedFruitStates } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {
  $fruit: Observable<Fruit>;
  constructor(public store: Store<ModuleState>) { }

  ngOnInit() {
    this.$fruit = this.store.select(getSelectedFruitStates);
  }

}
