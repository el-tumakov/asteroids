import {ThunkAction} from "redux-thunk";
import {AsteroidNeoWsAPI} from "../services";
import {AsteroidActions} from "./actions";
import {IActionLoadAsteroidFeed} from "../interfaces/actions";
import {IState} from "../interfaces/state";

export const fetchAsteroids = (
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
