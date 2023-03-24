import { Button } from "../Button";
import "./styles.scss";

interface SectionButtonProps {
  name: string;
  buttonDarkText: string;
  buttonLightText?: string;
  opacity: number;
}

export const SectionButton = ({
  name,
  buttonDarkText,
  buttonLightText,
  opacity,
}: SectionButtonProps) => {
  return (
    <div className="section-button-container" style={{ opacity: `${opacity}` }}>
      <Button className={`button-dark ${name}`}>{buttonDarkText}</Button>
      {buttonLightText && (
        <Button className={`button-light ${name}`}>{buttonLightText}</Button>
      )}
    </div>
  );
};
