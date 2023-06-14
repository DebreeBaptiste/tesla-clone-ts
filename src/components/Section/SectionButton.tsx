import { Button } from "../Button";
import "./styles.scss";

interface SectionButtonProps {
  name: string;
  buttonDarkText: string;
  buttonLightText?: string;
  buttonTransparent?: string;
  opacity: number;
}

export const SectionButton = ({
  name,
  buttonDarkText,
  buttonLightText,
  buttonTransparent,
  opacity,
}: SectionButtonProps) => {
  return (
    <div className="section-button-container" style={{ opacity: `${opacity}` }}>
      {buttonDarkText && (
        <Button className={`button-dark ${name}`}>{buttonDarkText}</Button>
      )}
      {buttonLightText && (
        <Button className={`button-light ${name}`}>{buttonLightText}</Button>
      )}
      {buttonTransparent && (
        <Button className={`button-transparent`}>{buttonTransparent}</Button>
      )}
    </div>
  );
};
