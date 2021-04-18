import React from "react";
import {useSelector} from "react-redux";
import Header from "../header/header";
import AsteroidsForDestroy from "../asteroids/asteroids-for-destroy/asteroids-for-destroy";
import Footer from "../footer/footer";
import {IState} from "../../interfaces/state";
import "./destroy-screen.scss";

const DestroyScreen: React.FC = () => {
  const asteroidsForDestroy = useSelector(
    (state: IState) => state.asteroidsForDestroy
  );

  return (
    <>
      <Header />
      <main className="page destroy-page">
        {asteroidsForDestroy.length ? (
          <AsteroidsForDestroy asteroids={asteroidsForDestroy} />
        ) : (
          <p className="destroy-page__blank wrapper">
            Астероидов на уничтожение нет!
          </p>
        )}
      </main>
      <Footer />
    </>
  );
};

export default DestroyScreen;
