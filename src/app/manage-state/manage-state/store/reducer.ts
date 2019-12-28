import * as fruitActions from "./actions";
import * as states from "./states";

export function reducer(state:states.FruitState = states.initialFruitState, action: fruitActions.FruitAction): any {
  switch (action.type) {
    case fruitActions.ADD_STORE_ITEMS: {
      // Handle get new banana action
      console.log("REDUCER " + fruitActions.INIT_STORE_ITEMS);
      return {...state, ...action.payload}
    }
    case fruitActions.ADD_NEW_APPLE: {
      // Handle get new banana action
      console.log("REDUCER " + fruitActions.ADD_NEW_APPLE);
      return {
        items:[...state.items, action.payload]
      };
    }
    case fruitActions.REMOVE_AN_APPLE: {
      // Handle get new banana action
      console.log("REDUCER " + fruitActions.REMOVE_AN_APPLE);
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
