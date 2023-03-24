/* Style */
import "./styles.scss";

interface ButtonProps {
  children: string;
  className: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={`button ${className}`}>{children}</button>;
};
