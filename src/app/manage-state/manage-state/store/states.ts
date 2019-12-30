import * as fromRouter from "@ngrx/router-store";
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { ActionReducerMap} from "@ngrx/store";
import {EntityState} from '@ngrx/entity';
import { fruitReducer } from "./reducer";
import { Fruit } from "./models";

export const FRUIT_STATE_MODULE_KEY = "fruitModuleStore";

export interface FruitState extends EntityState<Fruit>{
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
export interface ModuleState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  fruitState: FruitState;
}

export const reducers: ActionReducerMap<ModuleState> = {
  routerReducer: fromRouter.routerReducer,
  fruitState: fruitReducer
};

export class customSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl{
    const {url} = routerState;
    const {queryParams} = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;

    while(state.firstChild){
      state = state.firstChild;
    }
    const {params} = state;

    return{url, queryParams, params};
  }

}