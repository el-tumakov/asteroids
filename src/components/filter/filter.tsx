import React from "react";
import "./filter.scss";

const Filter = () => (
  <section className="filter page__filter">
    <div className="wrapper">
      <h2 className="visually-hidden">Фильтр астероидов</h2>
      <form className="filter__form">
        <fieldset className="filter__fieldset">
          <legend className="visually-hidden">
            Фильтрация астероидов по опасности
          </legend>
          <input
            className="visually-hidden filter__input"
            id="filter__checkbox"
            type="checkbox"
          />
          <label
            className="filter__label filter__label--checkbox"
            htmlFor="filter__checkbox"
          >
            Показать только опасные
          </label>
        </fieldset>
        <fieldset className="filter__fieldset filter__fieldset--distance">
          <legend className="visually-hidden">
            Изменение режима отображения расстояния до земли
          </legend>
          <div className="filter__kilometres-wrap">
            <span className="filter__text">Расстояние</span>
            <input
              className="visually-hidden filter__input"
              id="filter__kilometres"
              type="radio"
              name="filter__distance"
            />
            <label
              className="filter__label filter__label--distance filter__label--distance-active"
              htmlFor="filter__kilometres"
            >
              в километрах,
            </label>
          </div>
          <input
            className="visually-hidden filter__input"
            id="filter__moon"
            type="radio"
            name="filter__distance"
          />
          <label
            className="filter__label filter__label--distance filter__label--moon"
            htmlFor="filter__moon"
          >
            в дистанциях до луны
          </label>
        </fieldset>
      </form>
    </div>
  </section>
);

export default Filter;
