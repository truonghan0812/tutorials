import * as appActions from "./actions";
import { ADD_NEW_APPLE } from "./actions";

export function reducer(state: any, action: appActions.FruitAction): any {
  switch (action.type)// Switch on the action type
  {
    case ADD_NEW_APPLE: {
      // Handle get new banana action
      console.log("REDUCER " + ADD_NEW_APPLE);
      return {
        amount: 1
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
