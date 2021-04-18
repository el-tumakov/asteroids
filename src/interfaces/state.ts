import {FilterDistanceType} from "./filter";
import {
  IAdaptedNearEarthObjects,
  IAdaptedAsteroid,
  ILinks,
} from "../interfaces/asteroids";

export interface IState {
  links: ILinks;
  nearEarthObjects: {} | IAdaptedNearEarthObjects;
  asteroid: any;
  asteroidsForDestroy: Array<IAdaptedAsteroid>;
  isLoading: boolean;
  isFilterDanger: boolean;
  filterDistance: FilterDistanceType;
}
