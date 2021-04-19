import React, {Dispatch, useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsteroid} from "../../store/api-actions";
import {IState} from "../../interfaces/state";
import {TFetchAction} from "../../interfaces/api-actions";
import {TAsteroidActions} from "../../interfaces/actions";
import Header from "../header/header";
import AsteroidCardFull from "../asteroid-card/asteroid-card-full/asteroid-card-full";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import Footer from "../footer/footer";
import "./asteroid-screen.scss";

interface IParams {
  id: string;
}

const AsteroidScreen: React.FC = () => {
  const {id} = useParams<IParams>();
  const dispatch: Dispatch<TFetchAction<TAsteroidActions>> = useDispatch();
  const asteroid = useSelector((state: IState) => state.asteroid);
  const isLoading = useSelector((state: IState) => state.isLoading);
  const err = useSelector((state: IState) => state.error);

  useEffect(() => {
    dispatch(fetchAsteroid(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      {isLoading && <Spinner />}
      {err && <Error err={err} />}
      {!isLoading && !err && (
        <section className="asteroid-screen">
          <div className="wrapper">
            <h1 className="visually-hidden">
              {`Информация об астероиде ${asteroid!.name}`}
            </h1>
            <AsteroidCardFull asteroid={asteroid!} />
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default AsteroidScreen;
