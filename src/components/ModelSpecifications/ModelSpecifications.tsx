/* types */
import { FeatureProps } from "../../@types/feature";
import { ModelProps } from "../../@types/model";

/* styles */
import "./styles.scss";

export const ModelSpecifications: React.FC<{ model: ModelProps }> = ({
  model,
}) => {
  return (
    <section className="specification-section">
      <img
        className="specification-main-image"
        src={model.images.detailBackgroundModel.techModel}
        alt="picture of tesla car"
      />
      <div className="specification-main-container">
        <h3 className="specification-main-title">
          {model.technicalDescription.title}
        </h3>
        <p className="specification-main-description">
          {model.technicalDescription.description}
        </p>
      </div>

      <section className="specification-features">
        {model.technicalDescription.features.map((feature: FeatureProps) => (
          <div key={feature.id} className="specification-feature">
            <div className="specification-feature-content">
              <h4 className="specification-feature-title">{feature.title}</h4>
              <p className="specification-feature-description">
                {feature.description}
              </p>
            </div>
            <img
              className="specification-feature-image"
              src={feature.image}
              alt="picture of tesla car zooming on wheels"
            />
          </div>
        ))}
      </section>
    </section>
  );
};
