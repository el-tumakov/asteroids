import React, {useEffect} from "react";
import {useScrollbarSize} from "react-scrollbar-size";
import Header from "../header/header";
import Filter from "../filter/filter";
import MainAsteroids from "../asteroids/main-asteroids/main-asteroids";
import Footer from "../footer/footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./main-screen.scss";

const MIN_VIEWPORT_WIDTH = 320;

const MainScreen: React.FC = () => {
  const {width} = useScrollbarSize();

  useEffect(() => {
    document.body.style.minWidth = `${MIN_VIEWPORT_WIDTH - width}px`;
  }, [width]);

  return (
    <>
      <Header />
      <main className="page">
        <Filter />
        <MainAsteroids />
      </main>
      <Footer />
    </>
  );
};

export default MainScreen;
