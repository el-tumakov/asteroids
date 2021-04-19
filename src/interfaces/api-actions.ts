import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {AsteroidNeoWsAPI} from "../services";
import {TAsteroidActions} from "./actions";
import {IState} from "./state";

export type TFetchAction<T extends Action> = ThunkAction<
  void,
  IState,
  typeof AsteroidNeoWsAPI,
  T
>;

export type TFetchAsteroidsFeed = (
  url?: string
) => TFetchAction<TAsteroidActions>;

export type TFetchAsteroid = (id: string) => TFetchAction<TAsteroidActions>;
