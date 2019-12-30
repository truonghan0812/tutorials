import { Action, createAction, props } from "@ngrx/store";
import { Fruit } from "./models";
import { FruitState } from "./states";

// Constant names for our actions
export const ADD_NEW_APPLE = "Add New Apple";
export const INIT_STORE_ITEMS = "Init store items";
export const REMOVE_ALL_APPLE = "Remove All Apple";
export const ADD_STORE_ITEMS = "Add New Store Items"


export const AddNewStoreItems = createAction(ADD_STORE_ITEMS, props<{ fruits: Fruit[] }>());
export const AddNewApple = createAction(ADD_NEW_APPLE, props<{ fruit: Fruit }>());
export const RemoveAll = createAction(REMOVE_ALL_APPLE);
export const InitStoreItems = createAction(INIT_STORE_ITEMS);

// export class AddNewApple implements Action {
//   readonly type: string = ADD_NEW_APPLE;
//   constructor(public payload: any) {
//     console.log("ACTION " + ADD_NEW_APPLE);
//   }
// }
// export class InitStoreItems implements Action {
//   readonly type: string = INIT_STORE_ITEMS;
//   constructor(public payload: any) {
//     console.log("ACTION " + INIT_STORE_ITEMS);
//   }
// }
// export class AddNewStoreItems implements Action {
//   readonly type: string = ADD_STORE_ITEMS;
//   constructor(public payload: any) {
//     console.log("ACTION " + ADD_STORE_ITEMS);
//   }
// }
// export class RemoveAnApple implements Action {
//   readonly type: string = REMOVE_AN_APPLE;
//   constructor(public payload: any) {
//     console.log("ACTION " + REMOVE_AN_APPLE
//     );
//   }
// }
// export type FruitAction = AddNewApple | InitStoreItems | RemoveAnApple | AddNewStoreItems;
