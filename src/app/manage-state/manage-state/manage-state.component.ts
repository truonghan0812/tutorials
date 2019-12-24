import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store} from '@ngrx/store';
import { InitStoreItems, FruitState, AddNewApple, RemoveAnApple} from './store';

@Component({
  selector: 'app-manage-state',
  templateUrl: './manage-state.component.html',
  styleUrls: ['./manage-state.component.scss']
})
export class ManageStateComponent implements OnInit {

  public items$:Observable<any>;
  constructor(private store: Store<FruitState>) {}

  ngOnInit() {
    this.store.dispatch(new InitStoreItems(null));
    const selectorFuction = (s) => s.fruitStore.items;
    this.items$ = this.store.select(selectorFuction);
  }
  addItem(){
    this.store.dispatch(new AddNewApple({type:'🍎'}));
  }
  removeItem(){
    this.store.dispatch(new RemoveAnApple(null));
  }
  refresh(){
    this.store.dispatch(new InitStoreItems(null));
  }
}
