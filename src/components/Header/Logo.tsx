/* Tools */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorContext } from "../../Hooks/ColorContext";

export const Logo: React.FunctionComponent = () => {
  const { color } = useContext(ColorContext);

  return (
    <Link to="/" className="title-link">
      <h1 className="main-title">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 278.7 36.3"
          className="logo"
          fill={color === "black" ? "#000" : "#fff"}
        >
          <g id="TESLA">
            <path d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3" />
            <g>
              <path d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1" />
            </g>
          </g>
        </svg>
      </h1>
    </Link>
  );
};
