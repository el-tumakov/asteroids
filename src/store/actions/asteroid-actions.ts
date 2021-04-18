import {
  ActionType,
  IActionLoadAsteroidFeed,
  IActionGetAsteroid,
  IActionAddAsteroid,
  IActionClearAsteroids,
  IActionSetLoading,
  IActionSetFilterDanger,
  IActionSetFilterDistance,
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

export const setLoading = (isLoading: boolean): IActionSetLoading => ({
  type: ActionType.SET_LOADING,
  payload: isLoading,
});

export const setFilterDanger = (
  isFilterDanger: boolean
): IActionSetFilterDanger => ({
  type: ActionType.SET_FILTER_DANGER,
  payload: isFilterDanger,
});

export const setFilterDistance = (
  filterDistance: string
): IActionSetFilterDistance => ({
  type: ActionType.SET_FILTER_DISTANCE,
  payload: filterDistance,
});
