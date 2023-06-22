/* styles */
import "./styles.scss";

/* types */
interface ButtonTestdriveChoiceProps {
  model: number;
  onClick: (modelNumber: number) => void;
  modelNumber: number;
  children: React.ReactNode;
}

export const ButtonTestdriveModel = ({
  model,
  onClick,
  modelNumber,
  children,
}: ButtonTestdriveChoiceProps) => {
  const modelActive =
    model === modelNumber ? "testdrive-button-model--active" : "";

  const handleClick = () => {
    onClick(modelNumber);
  };

  return (
    <button
      className={`testdrive-button-model ${modelActive}`}
      data-model={modelNumber}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
