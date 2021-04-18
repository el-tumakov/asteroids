import {
  ActionType,
  IActionLoadAsteroidFeed,
  IActionGetAsteroid,
  IActionAddAsteroidForDestroy,
  IActionRemoveAsteroidFromDestroy,
  IActionDestroyAsteroids,
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

export const addAsteroidForDestroy = (
  asteroid: IAdaptedAsteroid
): IActionAddAsteroidForDestroy => ({
  type: ActionType.ADD_ASTEROID_FOR_DESTROY,
  payload: asteroid,
});

export const removeAsteroidFromDestroy = (
  asteroid: IAdaptedAsteroid
): IActionRemoveAsteroidFromDestroy => ({
  type: ActionType.REMOVE_ASTEROID_FROM_DESTROY,
  payload: asteroid,
});

export const destroyAsteroids = (): IActionDestroyAsteroids => ({
  type: ActionType.DESTROY_ASTEROIDS,
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
