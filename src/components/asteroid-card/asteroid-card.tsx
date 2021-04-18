import React, {Dispatch} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";
import {
  addAsteroidForDestroy,
  removeAsteroidFromDestroy,
} from "../../store/actions/asteroid-actions";
import {AsteroidActions} from "../../interfaces/actions";
import {IAdaptedAsteroid} from "../../interfaces/asteroids";
import {IState} from "../../interfaces/state";
import AsteroidPicture from "../asteroid-picture/asteroid-picture";
import "./asteroid-card.scss";

type AsteroidCardProps = {
  asteroid: IAdaptedAsteroid;
  cardType: "main" | "for-destroy";
};

moment.locale("ru");

const AsteroidCard: React.FC<AsteroidCardProps> = (props) => {
  const {asteroid, cardType} = props;
  const filterDistance = useSelector((state: IState) => state.filterDistance);
  const asteroidsForDestroy = useSelector(
    (state: IState) => state.asteroidsForDestroy
  );
  const dispatch: Dispatch<AsteroidActions> = useDispatch();

  const getDistance = () => {
    switch (filterDistance) {
      case "kilometres":
        return (
          Math.round(+asteroid.closeApproachData[0].missDistance.kilometers) +
          " км"
        );

      case "moons":
        const distance = Math.round(
          +asteroid.closeApproachData[0].missDistance.lunar
        ).toString();

        if (distance[distance.length - 1] === "1") {
          return distance + " луна";
        }

        if (
          distance[distance.length - 1] === "2" ||
          distance[distance.length - 1] === "3"
        ) {
          return distance + " луны";
        }

        return distance + " лун";
    }
  };

  const distance = getDistance();

  const pictureWidth = Math.round(
    asteroid.estimatedDiameter.meters.estimatedDiameterMin
  );
  const pictureHeight = Math.round(
    asteroid.estimatedDiameter.meters.estimatedDiameterMin
  );

  const handleMainClick = () => {
    dispatch(addAsteroidForDestroy(asteroid));
  };

  const handleForDestroyClick = () => {
    dispatch(removeAsteroidFromDestroy(asteroid));
  };

  return (
    <article
      className={`asteroid-card ${
        asteroid.isPotentiallyHazardousAsteroid && "asteroid-card--danger"
      }`}
    >
      <div className="asteroid-card__info">
        <h3 className="asteroid-card__title" style={{}}>
          <Link className="asteroid-card__link" to="#">
            {asteroid.name}
          </Link>
          <AsteroidPicture width={pictureWidth} height={pictureHeight} />
        </h3>
        <table className="asteroid-card__description">
          <tbody>
            <tr className="asteroid-card__row">
              <th className="asteroid-card__row-title" scope="row">
                Дата
              </th>
              <td className="asteroid-card__row-value">
                {moment(asteroid.closeApproachData[0].closeApproachDate).format(
                  "D MMMM YYYY"
                )}
              </td>
            </tr>
            <tr className="asteroid-card__row">
              <th className="asteroid-card__row-title" scope="row">
                Расстояние
              </th>
              <td className="asteroid-card__row-value">{distance}</td>
            </tr>
            <tr className="asteroid-card__row">
              <th className="asteroid-card__row-title" scope="row">
                Размер
              </th>
              <td className="asteroid-card__row-value">
                {`${Math.round(
                  asteroid.estimatedDiameter.meters.estimatedDiameterMin
                )} м`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="asteroid-card__side-wrap">
        <p className="asteroid-card__grade">
          Оценка:{" "}
          <span className="asteroid-card__grade-value">
            {asteroid.isPotentiallyHazardousAsteroid ? "опасен" : "не опасен"}
          </span>
        </p>
        {cardType === "main" && (
          <button
            className="asteroid-card__button"
            type="button"
            onClick={handleMainClick}
            disabled={
              asteroidsForDestroy.findIndex(
                (item) => item.id === asteroid.id
              ) >= 0
            }
          >
            На уничтожение
          </button>
        )}
        {cardType === "for-destroy" && (
          <button
            className="asteroid-card__button"
            type="button"
            onClick={handleForDestroyClick}
          >
            Убрать из списка
          </button>
        )}
      </div>
    </article>
  );
};

export default AsteroidCard;
