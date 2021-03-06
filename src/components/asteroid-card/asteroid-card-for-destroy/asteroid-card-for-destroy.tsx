import React from "react";
import AsteroidCard from "../asteroid-card";
import {IAdaptedAsteroid} from "../../../interfaces/asteroids";
import {CardTypes} from "../../../interfaces/card";

type AsteroidCardForDestroyProps = {
  asteroid: IAdaptedAsteroid;
};

const AsteroidCardForDestroy: React.FC<AsteroidCardForDestroyProps> = (
  props
) => {
  const {asteroid} = props;

  return <AsteroidCard asteroid={asteroid} cardType={CardTypes.FOR_DESTROY} />;
};

export default AsteroidCardForDestroy;
