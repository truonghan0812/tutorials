import { Action } from "@ngrx/store";

// Constant names for our actions
export const ADD_NEW_APPLE = "Add New Apple";

export class AddNewApple implements Action {
  readonly type: string = ADD_NEW_APPLE;
  constructor(public payload: any) {
    console.log("ACTION " + ADD_NEW_APPLE);
  }
}
export type FruitAction = AddNewApple;
