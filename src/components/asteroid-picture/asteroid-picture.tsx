import React from "react";

type AsteroidPictureProps = {
  width?: number;
  height?: number;
};

const AsteroidPicture = (props: AsteroidPictureProps) => {
  const {width, height} = props;

  return (
    <svg
      className="asteroid-card__picture"
      width={width}
      height={height}
      viewBox={`0 0 61 62`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.976 36.257c1.06 2.94 2.636 6.13 4.852 7.988 4.916 4.123 5.97 5.477 7.784 13.722 1.815 8.245 10.242 1.295 10.242 1.295s2.516-1.708 6.735.68a6.889 6.889 0 003.756.649c3.512-.177 10.114-1.645 15.493-9.397 7.725-11.13 12.231-14.429 10.944-24.323-1.287-9.894-2.751-15.018-13.87-16.726-7.58-1.163-13.826-5.203-17.037-7.656-.218-.167-.44-.325-.668-.475A11.904 11.904 0 0020.143.252a18.16 18.16 0 00-8.022 4.09 20.62 20.62 0 00-2.898 3.024A21.898 21.898 0 005.81 13.63a78.123 78.123 0 01-3.959 9.544 16.387 16.387 0 00-1.678 5.085 16.606 16.606 0 00.803 7.998z"
        fill="#828A9E"
      />
      <path
        d="M19.055 55.887a.933.933 0 00.653-.268.944.944 0 00.283-.65c.167-5.652-3.006-8.409-3.142-8.523a.932.932 0 00-1.293.131.946.946 0 00.083 1.306c.116.1 2.62 2.337 2.48 7.027a.946.946 0 00.552.888.93.93 0 00.356.082l.028.007zM6.257 32.958a.935.935 0 00.736-.358.946.946 0 00.195-.694c-.568-4.857.997-7.265 1.013-7.288a.947.947 0 00-.238-1.31.931.931 0 00-1.303.238c-.082.118-1.99 2.95-1.332 8.58.027.23.136.44.308.593a.933.933 0 00.62.24zM43.322 32.958a.932.932 0 00.734-.356.945.945 0 00.179-.8c-.99-4.267-4.92-5.629-6.861-5.753a.933.933 0 00-.679.232.945.945 0 00.557 1.649c.182.013 4.243.351 5.158 4.3a.944.944 0 00.912.728zM53.233 35.627a.93.93 0 00.62-.236c3.06-2.728 2.594-7.255 2.573-7.446a.944.944 0 00-.346-.632.932.932 0 00-1.316.147.946.946 0 00-.2.693c.005.037.371 3.756-1.953 5.827a.943.943 0 00.622 1.647zM32.476 37.355c1.724 0 3.121-1.107 3.121-2.473 0-1.366-1.397-2.474-3.121-2.474s-3.121 1.108-3.121 2.474 1.397 2.473 3.121 2.473zM30.548 49.23c1.568-1.431 2.292-3.199 1.617-3.946-.675-.748-2.492-.193-4.06 1.24-1.567 1.432-2.29 3.2-1.616 3.947.674.747 2.492.192 4.06-1.24zM46.017 47.233c.81-1.653.407-3.52-.9-4.167-1.306-.648-3.022.167-3.831 1.82-.81 1.654-.407 3.52.9 4.168 1.306.648 3.022-.168 3.831-1.821zM17.78 42.109c1.431-1.442 1.08-4.132-.787-6.01-1.866-1.878-4.54-2.233-5.972-.791-1.432 1.44-1.08 4.131.786 6.01 1.866 1.878 4.54 2.232 5.972.79zM22.46 24.299c3.309-.708 5.576-3.243 5.065-5.662-.511-2.42-3.608-3.806-6.916-3.098-3.309.708-5.576 3.243-5.065 5.662.511 2.42 3.608 3.806 6.916 3.098zM9.223 7.364c2.067 1.576 5.26 2.587 8.844 2.587 6.237 0 11.288-3.06 11.288-6.832 0-.373-.05-.745-.15-1.105A11.904 11.904 0 0020.141.252a18.16 18.16 0 00-8.02 4.09 20.622 20.622 0 00-2.898 3.022zM42.787 15.62c.351 0 .572-.016.612-.02a.935.935 0 00.638-.328.946.946 0 00-.106-1.328.932.932 0 00-.682-.221c-.066.005-4.368.302-6.972-2.459a.934.934 0 00-1.615.626.946.946 0 00.258.673c2.611 2.767 6.394 3.057 7.867 3.057z"
        fill="#62667C"
      />
    </svg>
  );
};

export default AsteroidPicture;