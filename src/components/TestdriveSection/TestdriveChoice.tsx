/* tools */
import { useState } from "react";

/* Components */
import { ButtonTestdriveModel } from "../Button/ButtonTestdriveChoice";

/* types */
import { HomeProps } from "../../@types/data";

/* styles */
import "./styles.scss";

export const TestdriveChoice = ({ data }: HomeProps) => {
  const [model, setModel] = useState(3);

  return (
    <section className="testdrive-choice">
      <div className="testdrive-choice-button-container">
        <ButtonTestdriveModel
          model={model}
          modelNumber={3}
          onClick={(modelNumber) => setModel(modelNumber)}
          children="Model S"
        />
        <ButtonTestdriveModel
          model={model}
          modelNumber={2}
          onClick={(modelNumber) => setModel(modelNumber)}
          children="Model 3"
        />
        <ButtonTestdriveModel
          model={model}
          modelNumber={4}
          onClick={(modelNumber) => setModel(modelNumber)}
          children="Model X"
        />
        <ButtonTestdriveModel
          model={model}
          modelNumber={1}
          onClick={(modelNumber) => setModel(modelNumber)}
          children="Model Y"
        />
      </div>
      <div className="testdrive-choice-image-container">
        <img
          src={data.items[model].images.testdriveModel}
          className="testdrive-choice-image"
          alt={`picture of {model} tesla car`}
        />
      </div>
    </section>
  );
};
