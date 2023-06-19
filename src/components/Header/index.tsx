import { useContext } from "react";
import { ColorContext } from "../../Hooks/ColorContext";
import { ModalContext } from "../../Hooks/ModalContext";
import { useLocation } from "react-router-dom";

/* Components */
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";

/* Styles */
import "./styles.scss";

interface HeaderProps {
  data: any;
}

export const Header = ({ data }: HeaderProps) => {
  const { color } = useContext(ColorContext);
  const { modalHandler } = useContext(ModalContext);
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname !== "/" && "not-fixed"}`}>
      <Logo />
      <NavBar className="main-nav">
        {data.items.map((item: any) => {
          return (
            item.name && (
              <NavItem path={item.slug} key={item.id}>
                {item.name}
              </NavItem>
            )
          );
        })}
      </NavBar>

      <NavBar className="aside-nav">
        <NavItem path={data.assistance.slug}>{data.assistance.name}</NavItem>
        <NavItem path={data.shop.slug}>{data.shop.name}</NavItem>
        <NavItem path={data.account.slug}>{data.account.name}</NavItem>
      </NavBar>

      <NavBar className="menu-button">
        <button
          className={`button-menu-right ${
            color === "white" ? "button-menu-right-white" : ""
          }`}
          onClick={() => modalHandler(false)}
        >
          Menu
        </button>
      </NavBar>
    </header>
  );
};
