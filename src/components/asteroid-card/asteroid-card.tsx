import React, {Dispatch} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import moment from "moment";
import {
  addAsteroidForDestroy,
  removeAsteroidFromDestroy,
  setLoading,
} from "../../store/actions/asteroid-actions";
import {TAsteroidActions} from "../../interfaces/actions";
import {FilterDistanceType} from "../../interfaces/filter";
import {
  IAdaptedAsteroid,
  IMissDistance,
  IAdaptedCloseApproachData,
} from "../../interfaces/asteroids";
import {IState} from "../../interfaces/state";
import {CardTypes} from "../../interfaces/card";
import AsteroidPicture from "../asteroid-picture/asteroid-picture";
import "moment/locale/ru";
import "./asteroid-card.scss";

type AsteroidCardProps = {
  asteroid: IAdaptedAsteroid;
  cardType: CardTypes;
};

moment.locale("ru");

const getDistance = (
  filterDistance: FilterDistanceType,
  missDistance: IMissDistance
) => {
  switch (filterDistance) {
    case FilterDistanceType.KILOMETRES:
      return Math.round(+missDistance.kilometers) + " км";

    case FilterDistanceType.MOONS:
      const distance = Math.round(+missDistance.lunar).toString();

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

const getApproach = (
  asteroidApproach: IAdaptedCloseApproachData,
  filterDistance: FilterDistanceType
) => {
  return (
    <table className="asteroid-card__description asteroid-card__description--approach">
      <caption className="asteroid-card__approach-caption">
        {moment(asteroidApproach.closeApproachDate).format("D MMMM YYYY")}
      </caption>
      <tbody>
        <tr className="asteroid-card__row">
          <th className="asteroid-card__row-title" scope="row">
            Скорость
          </th>
          <td className="asteroid-card__row-value">
            {Math.round(
              +asteroidApproach.relativeVelocity.kilometersPerSecond
            ) + " км/с"}
          </td>
        </tr>
        <tr className="asteroid-card__row">
          <th className="asteroid-card__row-title" scope="row">
            Время сближения
          </th>
          <td className="asteroid-card__row-value">
            {moment(asteroidApproach.epochDateCloseApproach).format("HH:MM")}
          </td>
        </tr>
        <tr className="asteroid-card__row">
          <th className="asteroid-card__row-title" scope="row">
            Расстояние
          </th>
          <td className="asteroid-card__row-value">
            {getDistance(filterDistance, asteroidApproach.missDistance)}
          </td>
        </tr>
        <tr className="asteroid-card__row">
          <th className="asteroid-card__row-title" scope="row">
            Орбита
          </th>
          <td className="asteroid-card__row-value">
            {asteroidApproach.orbitingBody}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const AsteroidCard: React.FC<AsteroidCardProps> = (props) => {
  const {asteroid, cardType} = props;
  const filterDistance = useSelector((state: IState) => state.filterDistance);
  const asteroidsForDestroy = useSelector(
    (state: IState) => state.asteroidsForDestroy
  );
  const dispatch: Dispatch<TAsteroidActions> = useDispatch();

  const distance = getDistance(
    filterDistance,
    asteroid.closeApproachData[0].missDistance
  );

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

  const handleLinkClick = () => {
    dispatch(setLoading(true));
  };

  return (
    <article
      className={`asteroid-card ${
        asteroid.isPotentiallyHazardousAsteroid && "asteroid-card--danger"
      } ${cardType === CardTypes.FULL && "asteroid-card--full"}`}
    >
      <div className="asteroid-card__info">
        <h3 className="asteroid-card__title" style={{}}>
          <Link
            className={`asteroid-card__link ${
              cardType === CardTypes.FULL && "asteroid-card__link--inactive"
            }`}
            onClick={handleLinkClick}
            to={`/asteroid/${asteroid.id}`}
          >
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
        {cardType === CardTypes.FULL && (
          <section className="asteroid-card__approach">
            <h4 className="asteroid-card__approach-title">Список сближений</h4>
            <ul className="asteroid-card__approach-list">
              {asteroid.closeApproachData.map((item) => (
                <li
                  className="asteroid-card__approach-item"
                  key={item.epochDateCloseApproach}
                >
                  {getApproach(item, filterDistance)}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <div className="asteroid-card__side-wrap">
        <p className="asteroid-card__grade">
          Оценка:{" "}
          <span className="asteroid-card__grade-value">
            {asteroid.isPotentiallyHazardousAsteroid ? "опасен" : "не опасен"}
          </span>
        </p>
        {cardType !== CardTypes.FOR_DESTROY && (
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
        {cardType === CardTypes.FOR_DESTROY && (
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
