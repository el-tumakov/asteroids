import React from "react";
import {
  IAdaptedAsteroid,
  IAdaptedNearEarthObjects,
} from "../../interfaces/asteroids";
import AsteroidCard from "../asteroid-card/asteroid-card";
import "./asteroids.scss";

type AsteroidsProps = {
  nearEarthObjects: IAdaptedNearEarthObjects;
};

const getAsteroids = (nearEarthObjects: IAdaptedNearEarthObjects) => {
  const asteroids: Array<IAdaptedAsteroid> = [];

  for (let object in nearEarthObjects) {
    nearEarthObjects[object].forEach((item: IAdaptedAsteroid) => {
      asteroids.push(item);
    });
  }

  return asteroids;
};

const Asteroids = (props: AsteroidsProps) => {
  const {nearEarthObjects} = props;
  const asteroids = getAsteroids(nearEarthObjects);

  return (
    <section className="asteroids page__asteroids">
      <h2 className="visually-hidden">Список астероидов</h2>
      <ul className="asteroids__list wrapper">
        {asteroids.map((item) => (
          <li className="asteroids__item" key={item.id}>
            <AsteroidCard asteroid={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Asteroids;
