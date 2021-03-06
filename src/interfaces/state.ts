import {AxiosError} from "axios";
import {FilterDistanceType} from "./filter";
import {
  IAdaptedNearEarthObjects,
  IAdaptedAsteroid,
  ILinks,
} from "../interfaces/asteroids";

export interface IState {
  links?: ILinks;
  nearEarthObjects?: IAdaptedNearEarthObjects;
  asteroid?: IAdaptedAsteroid;
  asteroidsForDestroy: Array<IAdaptedAsteroid>;
  isLoading: boolean;
  isFilterDanger: boolean;
  filterDistance: FilterDistanceType;
  error?: AxiosError;
}
