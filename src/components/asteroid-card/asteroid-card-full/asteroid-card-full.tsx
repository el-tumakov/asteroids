import React from "react";
import AsteroidCard from "../asteroid-card";
import {IAdaptedAsteroid} from "../../../interfaces/asteroids";
import {CardTypes} from "../../../interfaces/card";

type AsteroidCardMainProps = {
  asteroid: IAdaptedAsteroid;
};

const AsteroidCardFull: React.FC<AsteroidCardMainProps> = (props) => {
  const {asteroid} = props;

  return <AsteroidCard asteroid={asteroid} cardType={CardTypes.FULL} />;
};

export default AsteroidCardFull;
