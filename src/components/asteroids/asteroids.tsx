import React, {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  IAdaptedAsteroid,
  IAdaptedNearEarthObjects,
} from "../../interfaces/asteroids";
import {IState} from "../../interfaces/state";
import {fetchAsteroids} from "../../store/api-actions";
import {AsteroidActions} from "../../store/actions";
import AsteroidCard from "../asteroid-card/asteroid-card";
import "./asteroids.scss";

const MIN_ASTEROIDS = 5;

type AsteroidsProps = {
  nearEarthObjects: IAdaptedNearEarthObjects;
};

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

const Asteroids: React.FC<AsteroidsProps> = (props) => {
  const {nearEarthObjects} = props;
  const dispatch = useDispatch();
  const isFilterDanger = useSelector((state: IState) => state.isFilterDanger);
  const asteroids = getAsteroids(nearEarthObjects, isFilterDanger);
  const links = useSelector((state: IState) => state.links);
  const lastAsteroid = useRef<HTMLLIElement>(null);

  const scrollHandler = useCallback(() => {
    if (lastAsteroid.current) {
      const lastAsteroidRect = lastAsteroid.current.getBoundingClientRect();
      const isLastAsteroid = lastAsteroidRect.top - window.innerHeight <= 0;

      if (isLastAsteroid) {
        window.removeEventListener("scroll", scrollHandler);

        dispatch(AsteroidActions.setLoading(true));
        dispatch(fetchAsteroids(links.next));
      }
    }
  }, [dispatch, links.next]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  useEffect(() => {
    if (asteroids.length < MIN_ASTEROIDS) {
      dispatch(AsteroidActions.setLoading(true));
      dispatch(fetchAsteroids(links.next));
    }
  }, [asteroids, dispatch, links.next]);

  return (
    <section className="asteroids page__asteroids">
      <h2 className="visually-hidden">Список астероидов</h2>
      <ul className="asteroids__list wrapper">
        {asteroids.map((item, index) => (
          <li
            className="asteroids__item"
            key={item.id + item.closeApproachData[0].epochDateCloseApproach}
            ref={index === asteroids.length - 1 ? lastAsteroid : null}
          >
            <AsteroidCard asteroid={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Asteroids;
