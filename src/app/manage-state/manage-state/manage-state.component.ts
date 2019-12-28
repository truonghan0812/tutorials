import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Store, select} from '@ngrx/store';
import { InitStoreItems, FruitState, AddNewApple, RemoveAnApple} from './store';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-manage-state',
  templateUrl: './manage-state.component.html',
  styleUrls: ['./manage-state.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageStateComponent implements OnInit {

  items$:Observable<any>;
  
  constructor(private store: Store<FruitState>){}

  ngOnInit() {
    this.store.dispatch(new InitStoreItems(null));
    const selectorFuction = (s) => s.fruitStore.items;
    this.items$ = this.store.pipe(
      select(selectorFuction)
    );
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
