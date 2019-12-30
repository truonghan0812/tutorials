import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";
import { RouterStateUrl, ModuleState, FRUIT_STATE_MODULE_KEY } from "./states";
import { Fruit } from "./models";

export const getfruitEntites = createSelector(
  createFeatureSelector<ModuleState>(FRUIT_STATE_MODULE_KEY),
  (moduleState: ModuleState) => moduleState.fruitState.entities
);
export const getfruitStates = createSelector(getfruitEntites, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id)]);
});

export const selectRouter = createFeatureSelector<
  ModuleState,
  fromRouter.RouterReducerState<RouterStateUrl>
>("routerReducer");

export const getSelectedFruitStates = createSelector(
  getfruitEntites,
  selectRouter,
  (entities, routerState): Fruit => {
    return routerState.state && entities[routerState.state.params.fruitId];
  }
);
