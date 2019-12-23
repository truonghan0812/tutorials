import * as appActions from "./actions";
import { ADD_NEW_APPLE, INIT_STORE_ITEMS, REMOVE_AN_APPLE } from "./actions";
import { ActionReducerMap } from "@ngrx/store";
import { State, initialState } from "./states";

export function reducer(state:State = initialState , action: appActions.FruitAction): State {
  switch (action.type) {
    case INIT_STORE_ITEMS: {
      // Handle get new banana action
      console.log("REDUCER " + INIT_STORE_ITEMS);
      return {
        items: ["🍎", "🍎", "🍎", "🍎", "🍎"]
      };
    }
    case ADD_NEW_APPLE: {
      // Handle get new banana action
      console.log("REDUCER " + ADD_NEW_APPLE);
      return {
        items:[...state.items, action.payload]
      };
    }
    case REMOVE_AN_APPLE: {
      // Handle get new banana action
      console.log("REDUCER " + REMOVE_AN_APPLE);
      console.log(...state.items);
      return {
        items: [...state.items].slice(0, [...state.items].length -1)
      };
    }
    default: {
      // Handle default
      return {
        ...state // Return the current state
      };
    }
  }
}
