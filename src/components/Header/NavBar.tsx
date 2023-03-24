interface NavBarProps {
  children: JSX.Element[] | JSX.Element;
  className?: string;
}

export const NavBar = ({ children, className }: NavBarProps) => {
  return (
    <nav className={`nav ${className}`}>
      <ul className="nav-list">{children}</ul>
    </nav>
  );
};
