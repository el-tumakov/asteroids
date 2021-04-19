import {AsteroidActions} from "./actions";
import {TFetchAsteroid, TFetchAsteroidsFeed} from "./../interfaces/api-actions";

export const fetchAsteroidsFeed: TFetchAsteroidsFeed = (url) => (
  dispatch,
  _getState,
  api
) =>
  (url ? api.getFeedByURL(url) : api.getFeed()).then(({data}) =>
    dispatch(AsteroidActions.loadAsteroidFeed(data))
  );

export const fetchAsteroid: TFetchAsteroid = (id) => (
  dispatch,
  _getState,
  api
) =>
  api
    .getAsteroid(id)
    .then(({data}) => dispatch(AsteroidActions.loadAsteroid(data)));
