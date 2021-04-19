import React, {Dispatch} from "react";
import {useDispatch} from "react-redux";
import {TAsteroidActions} from "../../../interfaces/actions";
import {IAdaptedAsteroid} from "../../../interfaces/asteroids";
import {removeAsteroidFromDestroy} from "../../../store/actions/asteroid-actions";
import AsteroidButton from "../asteroid-button";

type TAsteroidButtonForDestroyProps = {
  asteroid: IAdaptedAsteroid;
};

const AsteroidButtonForDestroy: React.FC<TAsteroidButtonForDestroyProps> = (
  props
) => {
  const {asteroid} = props;
  const dispatch: Dispatch<TAsteroidActions> = useDispatch();

  const clickHandler = () => {
    dispatch(removeAsteroidFromDestroy(asteroid));
  };

  return (
    <AsteroidButton clickHandler={clickHandler} content="Убрать из списка" />
  );
};

export default AsteroidButtonForDestroy;
