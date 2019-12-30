import { Component, OnInit} from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Store, select} from '@ngrx/store';
// import { InitStoreItems, FruitState, AddNewApple, RemoveAnApple} from './store';
import { ModuleState} from './store/states';
import * as fromFeature from './store';
import { AddNewStoreItems, AddNewApple, RemoveAll } from './store';

@Component({
  selector: 'app-manage-state',
  templateUrl: './manage-state.component.html',
  styleUrls: ['./manage-state.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageStateComponent implements OnInit {

  items$:Observable<any>;
  
  constructor(private store: Store<ModuleState>){}

  ngOnInit() {
    this.store.dispatch(AddNewStoreItems({fruits: [
      {type:'🍎', id: 1},
      {type:'🍎', id: 2},
      {type:'🍎', id: 3},
      {type:'🍎', id: 4},
      {type:'🍎', id: 5}
     ]
    }));
    this.items$ = this.store.pipe(select(fromFeature.getfruitStates))
  }
  addItem(){
    this.store.dispatch(AddNewApple({fruit: {type:'🍎', id: Math.floor(Math.random() * 100)}}));
  }
  removeAll(id){
    this.store.dispatch(RemoveAll());
  }
  refresh(){
    this.store.dispatch(AddNewStoreItems({fruits: [
      {type:'🍎', id: 1},
      {type:'🍎', id: 2},
      {type:'🍎', id: 3},
      {type:'🍎', id: 4},
      {type:'🍎', id: 5}
     ]
    }));
  }
}
