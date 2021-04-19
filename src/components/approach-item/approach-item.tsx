import React from "react";
import moment from "moment";
import {IAdaptedCloseApproachData} from "../../interfaces/asteroids";
import {FilterDistanceType} from "../../interfaces/filter";
import {getDistance} from "../../utils";
import "moment/locale/ru";

type TApproachItemProps = {
  asteroidApproach: IAdaptedCloseApproachData;
  filterDistance: FilterDistanceType;
};

moment.locale("ru");

const ApproachItem: React.FC<TApproachItemProps> = (props) => {
  const {asteroidApproach, filterDistance} = props;

  return (
    <table className="asteroid-card__description approach__table">
      <caption className="approach__caption">
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

export default ApproachItem;
