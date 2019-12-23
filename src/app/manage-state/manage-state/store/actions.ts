import { Action, ActionReducerMap } from "@ngrx/store";
import { reducer } from "./reducer";
import { State } from "./states";

// Constant names for our actions
export const ADD_NEW_APPLE = "Add New Apple";
export const INIT_STORE_ITEMS= "Init store items";
export const REMOVE_AN_APPLE= "Remove An Apple";


export class AddNewApple implements Action {
  readonly type: string = ADD_NEW_APPLE;
  constructor(public payload: any) {
    console.log("ACTION " + ADD_NEW_APPLE) + payload;

  }
}
export class InitStoreItems implements Action {
  readonly type: string = INIT_STORE_ITEMS;
  constructor(public payload: any) {
    console.log("ACTION " + INIT_STORE_ITEMS);
  }
}
export class RemoveAnApple implements Action {
  readonly type: string = REMOVE_AN_APPLE;
  constructor() {
    console.log("ACTION " + REMOVE_AN_APPLE
    );
  }
}
export type FruitAction = AddNewApple | InitStoreItems | RemoveAnApple;
