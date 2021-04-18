import {Action} from "redux";
import {IAsteroidFeed, IAdaptedAsteroid} from "../interfaces/asteroids";

export enum ActionType {
  LOAD_ASTEROID_FEED,
  GET_ASTEROID,
  ADD_ASTEROID_FOR_DESTROY,
  REMOVE_ASTEROID_FROM_DESTROY,
  DESTROY_ASTEROIDS,
  SET_LOADING,
  SET_FILTER_DANGER,
  SET_FILTER_DISTANCE,
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

export interface IActionAddAsteroidForDestroy
  extends IAsteroidAction<IAdaptedAsteroid> {
  type: ActionType.ADD_ASTEROID_FOR_DESTROY;
}

export interface IActionRemoveAsteroidFromDestroy
  extends IAsteroidAction<IAdaptedAsteroid> {
  type: ActionType.REMOVE_ASTEROID_FROM_DESTROY;
}

export interface IActionDestroyAsteroids extends Action<ActionType> {
  type: ActionType.DESTROY_ASTEROIDS;
}

export interface IActionSetLoading extends IAsteroidAction<boolean> {
  type: ActionType.SET_LOADING;
}

export interface IActionSetFilterDanger extends IAsteroidAction<boolean> {
  type: ActionType.SET_FILTER_DANGER;
}

export interface IActionSetFilterDistance extends IAsteroidAction<string> {
  type: ActionType.SET_FILTER_DISTANCE;
}

export type AsteroidActions =
  | IActionLoadAsteroidFeed
  | IActionGetAsteroid
  | IActionAddAsteroidForDestroy
  | IActionRemoveAsteroidFromDestroy
  | IActionDestroyAsteroids
  | IActionSetLoading
  | IActionSetFilterDanger
  | IActionSetFilterDistance;
