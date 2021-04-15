import {
  ActionType,
  IActionLoadAsteroidFeed,
  IActionGetAsteroid,
  IActionAddAsteroid,
  IActionClearAsteroids,
} from "../../interfaces/actions";
import {IAsteroidFeed, IAdaptedAsteroid} from "../../interfaces/asteroids";

export const loadAsteroidFeed = (
  asteroidFeed: IAsteroidFeed
): IActionLoadAsteroidFeed => ({
  type: ActionType.LOAD_ASTEROID_FEED,
  payload: asteroidFeed,
});

export const getAsteroid = (
  asteroid: IAdaptedAsteroid
): IActionGetAsteroid => ({
  type: ActionType.GET_ASTEROID,
  payload: asteroid,
});

export const addAsteroid = (
  asteroid: IAdaptedAsteroid
): IActionAddAsteroid => ({
  type: ActionType.ADD_ASTEROID,
  payload: asteroid,
});

export const clearAsteroids = (
  astreoids: Array<IAdaptedAsteroid>
): IActionClearAsteroids => ({
  type: ActionType.CLEAR_ASTEROIDS,
  payload: astreoids,
});
