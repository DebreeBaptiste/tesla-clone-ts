/* types */
import { ModelProps } from "../../@types/model";

/* style */
import "./styles.scss";

export const ModelToOrder: React.FC<{ model: ModelProps }> = ({ model }) => {
  return (
    <section className="order">
      <div className="order-header">
        <div className="order-container">
          <h3 className="order-title">Découvrez {model.name}</h3>
          <p className="order-description">
            Configurez le vôtre ou demandez à être rappelé par un conseiller
            Tesla pour en savoir plus.
          </p>
          <div className="order-button-container">
            <button className="order-button button-transparent-black">
              Commander
            </button>
            <button className="order-button button-transparent-grey">
              Demander à être rappelé
            </button>
          </div>
        </div>
        <img
          className="order-image"
          src={model.images.detailBackgroundModel.orderModel}
          alt="picture of tesla car"
        />
      </div>
    </section>
  );
};
