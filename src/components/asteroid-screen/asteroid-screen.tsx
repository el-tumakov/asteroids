import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsteroid} from "../../store/api-actions";
import {IState} from "../../interfaces/state";
import Header from "../header/header";
import AsteroidCardFull from "../asteroid-card/asteroid-card-full/asteroid-card-full";
import Spinner from "../spinner/spinner";
import Footer from "../footer/footer";
import "./asteroid-screen.scss";

interface IParams {
  id: string;
}

const AsteroidScreen: React.FC = () => {
  const {id} = useParams<IParams>();
  const dispatch = useDispatch();
  const asteroid = useSelector((state: IState) => state.asteroid);
  const isLoading = useSelector((state: IState) => state.isLoading);

  useEffect(() => {
    dispatch(fetchAsteroid(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="asteroid-screen">
          <div className="wrapper">
            <h1 className="visually-hidden">
              {`Информация об астероиде ${asteroid.name}`}
            </h1>
            <AsteroidCardFull asteroid={asteroid} />
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default AsteroidScreen;
