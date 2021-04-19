import React, {Dispatch, useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsteroidsFeed} from "../../../store/api-actions";
import {AsteroidActions} from "../../../store/actions";
import {
  IAdaptedAsteroid,
  IAdaptedNearEarthObjects,
} from "../../../interfaces/asteroids";
import {IState} from "../../../interfaces/state";
import {TAsteroidActions} from "../../../interfaces/actions";
import {TFetchAction} from "../../../interfaces/api-actions";
import Spinner from "../../spinner/spinner";
import Error from "../../error/error";
import AsteroidCardMain from "../../asteroid-card/asteroid-card-main/asteroid-card-main";
import "../asteroids.scss";

const MIN_ASTEROIDS = 5;

const getAsteroids = (
  nearEarthObjects: IAdaptedNearEarthObjects,
  isFilterDanger: boolean
) => {
  const asteroids: Array<IAdaptedAsteroid> = [];

  for (let object in nearEarthObjects) {
    nearEarthObjects[object].forEach((item: IAdaptedAsteroid) => {
      if (isFilterDanger) {
        item.isPotentiallyHazardousAsteroid && asteroids.push(item);
      } else {
        asteroids.push(item);
      }
    });
  }

  return asteroids;
};

const MainAsteroids: React.FC = () => {
  const dispatch: Dispatch<
    TAsteroidActions | TFetchAction<TAsteroidActions>
  > = useDispatch();
  const links = useSelector((state: IState) => state.links);
  const nearEarthObjects = useSelector(
    (state: IState) => state.nearEarthObjects
  );
  const lastAsteroid = useRef<HTMLLIElement>(null);
  const isFilterDanger = useSelector((state: IState) => state.isFilterDanger);
  const isLoading = useSelector((state: IState) => state.isLoading);
  const err = useSelector((state: IState) => state.error);
  const asteroids = getAsteroids(nearEarthObjects!, isFilterDanger);

  const scrollHandler = useCallback(() => {
    if (lastAsteroid.current) {
      const lastAsteroidRect = lastAsteroid.current.getBoundingClientRect();
      const isLastAsteroid = lastAsteroidRect.top - window.innerHeight <= 0;

      if (isLastAsteroid) {
        window.removeEventListener("scroll", scrollHandler);

        dispatch(AsteroidActions.setLoading(true));
        dispatch(fetchAsteroidsFeed(links!.next));
      }
    }
  }, [dispatch, links, lastAsteroid]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  useEffect(() => {
    dispatch(fetchAsteroidsFeed());
  }, [dispatch]);

  useEffect(() => {
    if (asteroids.length < MIN_ASTEROIDS && !isLoading && !err) {
      dispatch(AsteroidActions.setLoading(true));
      dispatch(fetchAsteroidsFeed(links!.next));
    }
  }, [asteroids, dispatch, links, isLoading, err]);

  return (
    <>
      <section className="asteroids page__asteroids">
        <h2 className="visually-hidden">Список астероидов</h2>
        <ul className="asteroids__list wrapper">
          {asteroids.map((item, index) => (
            <li
              className="asteroids__item"
              key={item.id + item.closeApproachData[0].epochDateCloseApproach}
              ref={index === asteroids.length - 1 ? lastAsteroid : null}
            >
              <AsteroidCardMain asteroid={item} />
            </li>
          ))}
        </ul>
      </section>
      {isLoading && <Spinner />}
      {err && <Error err={err} />}
    </>
  );
};

export default MainAsteroids;
