import React from "react";
import AsteroidCard from "../asteroid-card";
import {CardTypes} from "../../../interfaces/card";
import {IAdaptedAsteroid} from "../../../interfaces/asteroids";

type AsteroidCardMainProps = {
  asteroid: IAdaptedAsteroid;
};

const AsteroidCardMain: React.FC<AsteroidCardMainProps> = (props) => {
  const {asteroid} = props;

  return <AsteroidCard asteroid={asteroid} cardType={CardTypes.MAIN} />;
};

export default AsteroidCardMain;
