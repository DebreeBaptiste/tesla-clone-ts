/* types */
import { ModelProps } from "../../../@types/model";

/* style */
import "./styles.scss";

export const EnergySection: React.FC<{ model: ModelProps }> = ({ model }) => {
  return (
    <section className="energy-section">
      <img
        className="energy-main-image"
        src={model.images.detailBackgroundModel.energyImage}
        alt="picture of tesla car"
      />
      <div className="shadow-divider" />
      <div className="energy-main-container">
        <h3 className="energy-main-title">
          {model.technicalDescription.title}
        </h3>
        <p className="energy-main-description">
          {model.technicalDescription.description}
        </p>
      </div>
    </section>
  );
};
