import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../interfaces/state";
import {fetchAsteroids} from "../../store/api-actions";

const MainScreen = () => {
  const dispatch = useDispatch();

  dispatch(fetchAsteroids());

  const asteroids = useSelector((state: IState) => state.nearEarthObjects);

  console.log(asteroids);

  return <h1>HelloWorld!</h1>;
};

export default MainScreen;
