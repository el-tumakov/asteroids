import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./spinner.scss";

const Spinner: React.FC = () => (
  <div className="spinner">
    <Loader type="Circles" color="lightgrey" height={60} width={60} />
  </div>
);

export default Spinner;
