interface NavItemProps {
  children: string;
  path?: string;
}

export const NavItem = ({ children, path }: NavItemProps) => {
  return (
    <li className="nav-list-item">
      <a href={path} className="nav-list-link">
        <span className="nav-list-text">{children}</span>
      </a>
    </li>
  );
};
