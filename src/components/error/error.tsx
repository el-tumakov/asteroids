import React from "react";
import {AxiosError} from "axios";
import "./error.scss";

type TErrorProps = {
  err: AxiosError;
};

const Error: React.FC<TErrorProps> = (props) => {
  const {err} = props;

  return (
    <div className="error">
      <p className="error__message">Извините, что-то пошло не так!</p>
      <p className="error__message">{err.message}</p>
    </div>
  );
};

export default Error;
