import {ThunkAction} from "redux-thunk";
import {AsteroidNeoWsAPI} from "../services";
import {AsteroidActions} from "./actions";
import {
  IActionLoadAsteroidFeed,
  IActionLoadAsteroid,
} from "../interfaces/actions";
import {IState} from "../interfaces/state";

export const fetchAsteroidsFeed = (
  url?: string
): ThunkAction<
  void,
  IState,
  typeof AsteroidNeoWsAPI,
  IActionLoadAsteroidFeed
> => (dispatch, _getState, api) =>
  (url ? api.getFeedByURL(url) : api.getFeed()).then(({data}) =>
    dispatch(AsteroidActions.loadAsteroidFeed(data))
  );

export const fetchAsteroid = (
  id: string
): ThunkAction<void, IState, typeof AsteroidNeoWsAPI, IActionLoadAsteroid> => (
  dispatch,
  _getState,
  api
) =>
  api
    .getAsteroid(id)
    .then(({data}) => dispatch(AsteroidActions.loadAsteroid(data)));
