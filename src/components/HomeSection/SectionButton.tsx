import { Button } from "../Button";
import "./styles.scss";

interface SectionButtonProps {
  name: string;
  buttonDarkText: string;
  buttonLightText?: string;
  buttonTransparent?: string;
  opacity: number;
  timeline?: boolean;
}

export const SectionButton = ({
  name,
  buttonDarkText,
  buttonLightText,
  buttonTransparent,
  opacity,
  timeline,
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
        <Button className={`button-transparent visible-${timeline}`}>
          {buttonTransparent}
        </Button>
      )}
    </div>
  );
};
