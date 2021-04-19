import {IAdaptedAsteroid} from "../interfaces/asteroids";

export const getAsteroidsForDestroy = (): Array<IAdaptedAsteroid> => {
  const asteroidsForDestroy = localStorage.getItem("asteroidsForDestroy");

  try {
    return asteroidsForDestroy ? JSON.parse(asteroidsForDestroy) : [];
  } catch {
    return [];
  }
};

export const setAsteroidsForDestroy = (asteroids: Array<IAdaptedAsteroid>) => {
  localStorage.setItem("asteroidsForDestroy", JSON.stringify(asteroids));
};

export const removeAsteroidsFromDestroy = () => {
  localStorage.removeItem("asteroidsForDestroy");
};
