import { useContext } from "react";
import { ColorContext } from "../../Hooks/ColorContext";
import { Link } from "react-router-dom";

interface NavItemProps {
  children: string;
  path: string;
}

export const NavItem = ({ children, path }: NavItemProps) => {
  const { color } = useContext(ColorContext);

  return (
    <li className="nav-list-item">
      <Link
        to={path}
        className={`nav-list-link ${
          color === "white" ? "nav-list-link-white" : ""
        }`}
      >
        <span className="nav-list-text">{children}</span>
      </Link>
    </li>
  );
};
