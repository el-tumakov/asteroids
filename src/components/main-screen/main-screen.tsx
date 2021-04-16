import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../interfaces/state";
import {fetchAsteroids} from "../../store/api-actions";
import {useScrollbarSize} from "react-scrollbar-size";
import Header from "../header/header";
import Filter from "../filter/filter";
import Asteroids from "../asteroids/asteroids";
import "./main-screen.scss";

const MIN_VIEWPORT_WIDTH = 320;

const MainScreen = () => {
  const dispatch = useDispatch();
  const {width} = useScrollbarSize();

  useEffect(() => {
    dispatch(fetchAsteroids());
  }, [dispatch]);

  useEffect(() => {
    document.body.style.minWidth = `${MIN_VIEWPORT_WIDTH - width}px`;
  }, [width]);

  const nearEarthObjects = useSelector(
    (state: IState) => state.nearEarthObjects
  );

  return (
    <>
      <Header />
      <main className="page">
        <Filter />
        <Asteroids nearEarthObjects={nearEarthObjects} />
      </main>
    </>
  );
};

export default MainScreen;
