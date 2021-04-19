import React, {MouseEventHandler} from "react";
import "./asteroid-button.scss";

type TAsteroidButtonProps = {
  clickHandler: MouseEventHandler<HTMLButtonElement>;
  content: string;
  isDisabled?: boolean;
};

const AsteroidButton: React.FC<TAsteroidButtonProps> = (props) => {
  const {clickHandler, content, isDisabled} = props;

  return (
    <button
      className="asteroid-card__button asteroid-button"
      type="button"
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};

export default AsteroidButton;
