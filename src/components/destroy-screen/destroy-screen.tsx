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
      <main className="page destroy">
        {asteroidsForDestroy.length ? (
          <AsteroidsForDestroy asteroids={asteroidsForDestroy} />
        ) : (
          <div className="wrapper">
            <p className="destroy__blank">Астероидов на уничтожение нет!</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default DestroyScreen;
