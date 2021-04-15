import {Reducer} from "redux";
import {IState} from "./../interfaces/state";
import {IAdaptedAsteroid} from "../interfaces/asteroids";
import {ActionType, AsteroidActions} from "../interfaces/actions";
import {adaptNearEarthObjectsToClient} from "./../utils";

const initialState: IState = {
  links: {},
  nearEarthObjects: {},
  asteroid: {},
  checkedAsteroids: [],
};

export const reducer: Reducer<IState, AsteroidActions> = (
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
      });

    case ActionType.GET_ASTEROID:
      return Object.assign({}, state, {
        asteroid: action.payload,
      });

    case ActionType.ADD_ASTEROID:
      return Object.assign({}, state, {
        checkedAsteroids: [...state.checkedAsteroids, action.payload],
      });

    case ActionType.CLEAR_ASTEROIDS:
      return Object.assign({}, state, {
        checkedAsteroids: state.checkedAsteroids.filter((asteroid) => {
          if (
            action.payload.find(
              (item: IAdaptedAsteroid) => asteroid.id === item.id
            )
          ) {
            return false;
          }

          return true;
        }),
      });

    default:
      return state;
  }
};
