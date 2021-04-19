import React from "react";
import {IAdaptedAsteroid} from "../../interfaces/asteroids";
import {FilterDistanceType} from "../../interfaces/filter";
import ApproachItem from "../approach-item/approach-item";
import "./asteroid-approach.scss";

type TAsteroidApproachProps = {
  asteroid: IAdaptedAsteroid;
  filterDistance: FilterDistanceType;
};

const AsteroidApproach: React.FC<TAsteroidApproachProps> = (props) => {
  const {asteroid, filterDistance} = props;

  return (
    <section className="approach">
      <h4 className="approach__title">Список сближений</h4>
      <ul className="approach__list">
        {asteroid.closeApproachData.map((item) => (
          <li className="approach__item" key={item.epochDateCloseApproach}>
            <ApproachItem
              asteroidApproach={item}
              filterDistance={filterDistance}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AsteroidApproach;
