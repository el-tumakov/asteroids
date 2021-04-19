import {Reducer} from "redux";
import {
  getAsteroidsForDestroy,
  setAsteroidsForDestroy,
  removeAsteroidsFromDestroy,
} from "./../services/local-storage";
import {IState} from "./../interfaces/state";
import {ActionType, TAsteroidActions} from "../interfaces/actions";
import {adaptNearEarthObjectsToClient, adaptAsteroidToClient} from "./../utils";
import {FilterDistanceType} from "../interfaces/filter";

const initialState: IState = {
  links: undefined,
  nearEarthObjects: undefined,
  asteroid: undefined,
  asteroidsForDestroy: getAsteroidsForDestroy(),
  isLoading: true,
  isFilterDanger: false,
  filterDistance: FilterDistanceType.KILOMETRES,
};

export const reducer: Reducer<IState, TAsteroidActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.LOAD_ASTEROID_FEED:
      return Object.assign({}, state, {
        links: action.payload.links,
        nearEarthObjects: Object.assign(
          {},
          state.nearEarthObjects,
          adaptNearEarthObjectsToClient(action.payload.near_earth_objects)
        ),
        isLoading: false,
      });

    case ActionType.LOAD_ASTEROID:
      return Object.assign({}, state, {
        asteroid: adaptAsteroidToClient(action.payload),
        isLoading: false,
      });

    case ActionType.ADD_ASTEROID_FOR_DESTROY:
      setAsteroidsForDestroy([...state.asteroidsForDestroy, action.payload]);

      return Object.assign({}, state, {
        asteroidsForDestroy: [...state.asteroidsForDestroy, action.payload],
      });

    case ActionType.REMOVE_ASTEROID_FROM_DESTROY:
      const asteroidsForDestroy = state.asteroidsForDestroy.filter(
        (item) => item.id !== action.payload.id
      );

      setAsteroidsForDestroy(asteroidsForDestroy);

      return Object.assign({}, state, {
        asteroidsForDestroy: asteroidsForDestroy,
      });

    case ActionType.DESTROY_ASTEROIDS:
      removeAsteroidsFromDestroy();

      return Object.assign({}, state, {
        asteroidsForDestroy: [],
      });

    case ActionType.SET_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      });

    case ActionType.SET_FILTER_DANGER:
      return Object.assign({}, state, {
        isFilterDanger: action.payload,
      });

    case ActionType.SET_FILTER_DISTANCE:
      return Object.assign({}, state, {
        filterDistance: action.payload,
      });

    default:
      return state;
  }
};
