import React, {CSSProperties, Dispatch} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import moment from "moment";
import {setLoading} from "../../store/actions/asteroid-actions";
import {TAsteroidActions} from "../../interfaces/actions";
import {IAdaptedAsteroid} from "../../interfaces/asteroids";
import {IState} from "../../interfaces/state";
import {CardTypes} from "../../interfaces/card";
import {getDistance} from "../../utils";
import AsteroidApproach from "../asteroid-approach/asteroid-approach";
import AsteroidButtonMain from "../asteroid-button/asteroid-button-main/asteroid-button-main";
import AsteroidButtonForDestroy from "../asteroid-button/asteroid-button-for-destroy/asteroid-button-for-destroy";
import "moment/locale/ru";
import "./asteroid-card.scss";

type AsteroidCardProps = {
  asteroid: IAdaptedAsteroid;
  cardType: CardTypes;
};

moment.locale("ru");

const AsteroidCard: React.FC<AsteroidCardProps> = (props) => {
  const {asteroid, cardType} = props;
  const filterDistance = useSelector((state: IState) => state.filterDistance);
  const dispatch: Dispatch<TAsteroidActions> = useDispatch();

  const distance = getDistance(
    filterDistance,
    asteroid.closeApproachData[0].missDistance
  );

  const asteroidStyle = {
    "--asteroid-width":
      Math.round(asteroid.estimatedDiameter.meters.estimatedDiameterMin) + "px",
    "--asteroid-height":
      Math.round(asteroid.estimatedDiameter.meters.estimatedDiameterMin) + "px",
  } as CSSProperties;

  const handleLinkClick = () => {
    dispatch(setLoading(true));
  };

  return (
    <article
      className={`asteroid-card ${
        asteroid.isPotentiallyHazardousAsteroid && "asteroid-card--danger"
      } ${cardType === CardTypes.FULL && "asteroid-card--full"}`}
      style={asteroidStyle}
    >
      <div className="asteroid-card__info">
        <h3 className="asteroid-card__title" style={asteroidStyle}>
          <Link
            className={`asteroid-card__link ${
              cardType === CardTypes.FULL && "asteroid-card__link--inactive"
            }`}
            onClick={handleLinkClick}
            to={`/asteroid/${asteroid.id}`}
          >
            {asteroid.name}
          </Link>
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
          <AsteroidApproach
            asteroid={asteroid}
            filterDistance={filterDistance}
          />
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
          <AsteroidButtonMain asteroid={asteroid} />
        )}
        {cardType === CardTypes.FOR_DESTROY && (
          <AsteroidButtonForDestroy asteroid={asteroid} />
        )}
      </div>
    </article>
  );
};

export default AsteroidCard;
