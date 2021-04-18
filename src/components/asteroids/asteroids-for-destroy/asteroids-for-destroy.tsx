import React from "react";
import {useDispatch} from "react-redux";
import {IAdaptedAsteroid} from "../../../interfaces/asteroids";
import {destroyAsteroids} from "../../../store/actions/asteroid-actions";
import AsteroidCardForDestroy from "../../asteroid-card/asteroid-card-for-destroy/asteroid-card-for-destroy";
import "../asteroids.scss";

type DestroyAsteroidsProps = {
  asteroids: Array<IAdaptedAsteroid>;
};

const AsteroidsForDestroy: React.FC<DestroyAsteroidsProps> = (props) => {
  const {asteroids} = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(destroyAsteroids());
  };

  return (
    <section className="asteroids page__asteroids">
      <h2 className="visually-hidden">Список астероидов на уничтожение</h2>
      <ul className="asteroids__list wrapper">
        {asteroids.map((item) => (
          <li
            className="asteroids__item"
            key={item.id + item.closeApproachData[0].epochDateCloseApproach}
          >
            <AsteroidCardForDestroy asteroid={item} />
          </li>
        ))}
      </ul>
      <button
        className="asteroids__destroy destroy-page__destroy-button"
        type="button"
        onClick={handleClick}
      >
        Вызвать бригаду им. Брюса Уиллиса!
      </button>
    </section>
  );
};

export default AsteroidsForDestroy;
