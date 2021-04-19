import React, {Dispatch} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TAsteroidActions} from "../../../interfaces/actions";
import {IAdaptedAsteroid} from "../../../interfaces/asteroids";
import {IState} from "../../../interfaces/state";
import {addAsteroidForDestroy} from "../../../store/actions/asteroid-actions";
import AsteroidButton from "../asteroid-button";

type TAsteroidButtonMainProps = {
  asteroid: IAdaptedAsteroid;
};

const AsteroidButtonMain: React.FC<TAsteroidButtonMainProps> = (props) => {
  const {asteroid} = props;
  const dispatch: Dispatch<TAsteroidActions> = useDispatch();
  const asteroidsForDestroy = useSelector(
    (state: IState) => state.asteroidsForDestroy
  );

  const isDisabled =
    asteroidsForDestroy.findIndex((item) => item.id === asteroid.id) >= 0;

  const clickHandler = () => {
    dispatch(addAsteroidForDestroy(asteroid));
  };

  return (
    <AsteroidButton
      clickHandler={clickHandler}
      content="На уничтожение"
      isDisabled={isDisabled}
    />
  );
};

export default AsteroidButtonMain;
