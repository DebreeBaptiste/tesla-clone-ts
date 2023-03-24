/* Tools */
import { Link } from "react-router-dom";

/* Components */
import logo from "../../assets/tesla_logo.svg";

export const Logo: React.FunctionComponent = () => {
  return (
    <Link to="/" className="title-link">
      <h1 className="main-title">
        <img src={logo} className="logo" />
      </h1>
    </Link>
  );
};
