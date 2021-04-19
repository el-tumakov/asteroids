import {AxiosError} from "axios";
import {AsteroidActions} from "./actions";
import {TFetchAsteroid, TFetchAsteroidsFeed} from "./../interfaces/api-actions";

export const fetchAsteroidsFeed: TFetchAsteroidsFeed = (url) => (
  dispatch,
  _getState,
  api
) =>
  (url ? api.getFeedByURL(url) : api.getFeed())
    .then(({data}) => dispatch(AsteroidActions.loadAsteroidFeed(data)))
    .catch((err: AxiosError) => {
      dispatch(AsteroidActions.setError(err));
    });

export const fetchAsteroid: TFetchAsteroid = (id) => (
  dispatch,
  _getState,
  api
) =>
  api
    .getAsteroid(id)
    .then(({data}) => dispatch(AsteroidActions.loadAsteroid(data)))
    .catch((err: AxiosError) => {
      dispatch(AsteroidActions.setError(err));
    });
