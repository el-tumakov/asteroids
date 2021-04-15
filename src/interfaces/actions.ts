import {Action} from "redux";
import {IAsteroidFeed, IAdaptedAsteroid} from "../interfaces/asteroids";

export enum ActionType {
  LOAD_ASTEROID_FEED,
  GET_ASTEROID,
  ADD_ASTEROID,
  CLEAR_ASTEROIDS,
}

export interface IAsteroidAction<T> extends Action<ActionType> {
  payload: T;
}

export interface IActionLoadAsteroidFeed
  extends IAsteroidAction<IAsteroidFeed> {
  type: ActionType.LOAD_ASTEROID_FEED;
}

export interface IActionGetAsteroid extends IAsteroidAction<IAdaptedAsteroid> {
  type: ActionType.GET_ASTEROID;
}

export interface IActionAddAsteroid extends IAsteroidAction<IAdaptedAsteroid> {
  type: ActionType.ADD_ASTEROID;
}

export interface IActionClearAsteroids
  extends IAsteroidAction<Array<IAdaptedAsteroid>> {
  type: ActionType.CLEAR_ASTEROIDS;
}

export type AsteroidActions =
  | IActionLoadAsteroidFeed
  | IActionGetAsteroid
  | IActionAddAsteroid
  | IActionClearAsteroids;
