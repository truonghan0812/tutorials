import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Fruit } from "./models";
import { FruitState } from "./states";

export const fruitAdapter: EntityAdapter<Fruit> = createEntityAdapter<Fruit>();

export const initialState: FruitState = fruitAdapter.getInitialState();
