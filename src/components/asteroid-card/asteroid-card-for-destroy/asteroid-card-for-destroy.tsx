import React from "react";
import AsteroidCard from "../asteroid-card";
import {IAdaptedAsteroid} from "../../../interfaces/asteroids";

type AsteroidCardForDestroyProps = {
  asteroid: IAdaptedAsteroid;
};

const AsteroidCardForDestroy: React.FC<AsteroidCardForDestroyProps> = (
  props
) => {
  const {asteroid} = props;

  return <AsteroidCard asteroid={asteroid} cardType="for-destroy" />;
};

export default AsteroidCardForDestroy;
