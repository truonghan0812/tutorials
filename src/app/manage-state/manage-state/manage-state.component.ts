import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store} from '@ngrx/store';
import { InitStoreItems, State, AddNewApple, RemoveAnApple} from './store';

@Component({
  selector: 'app-manage-state',
  templateUrl: './manage-state.component.html',
  styleUrls: ['./manage-state.component.scss']
})
export class ManageStateComponent implements OnInit {

  public items$:Observable<any>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new InitStoreItems(null));
    const selectorFuction = (s) => s.fruitStore.items;
    this.items$ = this.store.select(selectorFuction);
  }
  addItem($event){
    this.store.dispatch(new AddNewApple('🍎'));
  }
  removeItem($event){
    this.store.dispatch(new RemoveAnApple());
  }
  // refresh($event){
  //   this.initItems = ['🍎','🍎','🍎','🍎','🍎'];
  //   this.items$ = of((this.initItems));
  // }
}
