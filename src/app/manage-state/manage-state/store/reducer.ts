import { createReducer, Action, on } from "@ngrx/store";
import { initialState, fruitAdapter } from "./adapters";
import * as FruitAction from './actions';
import { FruitState } from "./states";

const reducer = createReducer(initialState,
  on(FruitAction.AddNewStoreItems, (state, {fruits}) => {
    return fruitAdapter.addMany(fruits, state);
  }),
  on(FruitAction.AddNewApple, (state, {fruit}) => {
    return fruitAdapter.addOne(fruit, state);
  }),
  on(FruitAction.RemoveAll, (state) => {
    return fruitAdapter.removeAll(state);
  })
);
 
export function fruitReducer(fruitState: FruitState | undefined, action: Action) {
  return reducer(fruitState, action);
}


















// import * as fruitActions from "./actions";
// import { FruitState, initialFruitState } from "./states";
// import { Action } from "rxjs/internal/scheduler/Action";
// import {Fruit} from './models';
// export function fruitReducer(state:FruitState = initialFruitState, action: fruitActions.FruitAction): any {
//   switch (action.type) {
//     case fruitActions.ADD_STORE_ITEMS: {
//       // Handle get new banana action
//       console.log("REDUCER " + fruitActions.INIT_STORE_ITEMS);
//       const fruits: any = action.payload.data;
//       const entities = fruits.reduce(
//         (entities: {[id:number]: Fruit}, fruit:Fruit) => {
//           return {
//             ...entities,
//             [fruit.id]: fruit
//           }
//         },
//         {
//           ...state.entities
//         }
//       );
//       return {...state,
//               entities
//           }
//     }
//     case fruitActions.ADD_NEW_APPLE: {
//       // Handle get new banana action
//       console.log("REDUCER " + fruitActions.ADD_NEW_APPLE);
//       return {
//         entities:[...state.data, action.payload]
//       }; addOne
//     }
//     case fruitActions.REMOVE_AN_APPLE: {
//       // Handle get new banana action
//       console.log("REDUCER " + fruitActions.REMOVE_AN_APPLE);
//       return {
//         data: [...state.data].slice(0, [...state.data].length -1)
//       };
//     }
//     default: {
//       // Handle default
//       return {
//         ...state // Return the current state
//       };
//     }
//   }
// }