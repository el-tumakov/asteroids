import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../interfaces/state";
import {fetchAsteroids} from "../../store/api-actions";
import Header from "../header/header";

const MainScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsteroids());
  }, [dispatch]);

  const asteroids = useSelector((state: IState) => state.nearEarthObjects);

  console.log(asteroids);

  return <Header />;
};

export default MainScreen;
