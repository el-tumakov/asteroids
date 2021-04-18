import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../interfaces/state";
import {fetchAsteroids} from "../../store/api-actions";
import {useScrollbarSize} from "react-scrollbar-size";
import Header from "../header/header";
import Filter from "../filter/filter";
import Spinner from "../spinner/spinner";
import Asteroids from "../asteroids/asteroids";
import Footer from "../footer/footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./main-screen.scss";

const MIN_VIEWPORT_WIDTH = 320;

const MainScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {width} = useScrollbarSize();
  const nearEarthObjects = useSelector(
    (state: IState) => state.nearEarthObjects
  );
  const isLoading = useSelector((state: IState) => state.isLoading);

  useEffect(() => {
    dispatch(fetchAsteroids());
  }, [dispatch]);

  useEffect(() => {
    document.body.style.minWidth = `${MIN_VIEWPORT_WIDTH - width}px`;
  }, [width]);

  return (
    <>
      <Header />
      <main className="page">
        <Filter />
        <Asteroids nearEarthObjects={nearEarthObjects} />
        {isLoading && <Spinner />}
      </main>
      <Footer />
    </>
  );
};

export default MainScreen;
