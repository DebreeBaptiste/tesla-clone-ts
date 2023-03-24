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
  return (
    <header className="header">
      <Logo />
      <NavBar className="main-nav">
        {data.items.map((item: any) => {
          return (
            <NavItem path={item.slug} key={item.id}>
              {item.name}
            </NavItem>
          );
        })}
      </NavBar>

      <NavBar className="aside-nav">
        <NavItem path={data.assistance.slug}>{data.assistance.name}</NavItem>
        <NavItem path={data.shop.slug}>{data.shop.name}</NavItem>
        <NavItem path={data.account.slug}>{data.account.name}</NavItem>
      </NavBar>
      <NavBar className="menu-button">
        <button className="button-menu-right">Menu</button>
      </NavBar>
    </header>
  );
};
