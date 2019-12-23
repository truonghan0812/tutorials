import { ActionReducerMap, createSelector } from '@ngrx/store';
// Import everything from the banana state directory
import * as fruitStoreState from './app/manage-state/manage-state/store';   

// export interface AppState {
//   fruitStore: fruitStoreState.State;
// }
// export const reducers: ActionReducerMap<AppState> = {
//     fruitStore: fruitStoreState.reducer
// }

// export const effects: Array<any> = [
//   bananaStore.BananaEffects
// ];

// Selector to get fruit store  state
// export const selectStoreItemsFunctions  = (state: AppState) => state.fruitStore;
// export const selectFeatureCount = createSelector(
//   selectStoreItemsFunctions,
//   (state: fruitStoreState.State) => state.items
// );