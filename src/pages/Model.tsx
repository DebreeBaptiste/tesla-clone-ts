import { useContext, useEffect } from "react";
import { ModelProps } from "../@types/model";

import { Link, useLocation } from "react-router-dom";
import { ColorContext } from "../Hooks/ColorContext";

import "./Model.scss";
import { FeatureProps } from "../@types/feature";

export const Model: React.FC<{ model: ModelProps }> = ({ model }) => {
  const { pathname } = useLocation();
  const { color, changeColor } = useContext(ColorContext);

  useEffect(() => {
    if (pathname === "/model3" || pathname === "/powerwall") {
      changeColor("white");
    } else {
      changeColor("black");
    }
  }, [pathname]);

  return (
    <>
      <main className="model">
        <div
          className="model-container"
          style={{
            backgroundImage: `url(${model.images.detailBackgroundModel.mainModel})`,
          }}
        >
          <div className="model-title-container">
            {pathname !== "/powerwall" && pathname !== "/recharge" && (
              <>
                <h2 className={`model-title model-title-${color}`}>
                  {model.name}
                </h2>
                <Link to="/" className={`model-link model-link-${color}`}>
                  Véhicules disponibles
                </Link>
              </>
            )}
            {(pathname === "/powerwall" || pathname === "/recharge") && (
              <>
                <h2 className={`model-title model-title-${color}`}>
                  {model.name}
                </h2>
              </>
            )}
          </div>
          <div
            className={`model-content ${
              pathname === "/recharge" && "recharge-white"
            }`}
          >
            <div className="model-content-technical-container">
              {model.details.map((detail: any) => (
                <div key={detail.id} className="model-content-technical">
                  <span className="model-content-technical-value">
                    {detail.value}
                  </span>
                  <span className="model-content-technical-name">
                    {detail.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="shadow-divider"></div>

        <section className="tech-section">
          <img
            className="tech-main-image"
            src={model.images.detailBackgroundModel.techModel}
            alt="picture of tesla car"
          />
          <div className="tech-main-container">
            <h3 className="tech-main-title">
              {model.technicalDescription.title}
            </h3>
            <p className="tech-main-description">
              {model.technicalDescription.description}
            </p>
          </div>

          <section className="tech-features">
            {model.technicalDescription.features.map(
              (feature: FeatureProps) => (
                <div key={feature.id} className="tech-feature">
                  <div className="tech-feature-content">
                    <h4 className="tech-feature-title">{feature.title}</h4>
                    <p className="tech-feature-description">
                      {feature.description}
                    </p>
                  </div>
                  <img
                    className="tech-feature-image"
                    src={feature.image}
                    alt="picture of tesla car zooming on wheels"
                  />
                </div>
              )
            )}
          </section>
        </section>

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
      </main>
      <footer className="footer">
        <p className="footer-text">
          Certaines fonctionnalités du véhicule consomment une grande quantité
          de données et nécessitent au moins la Connexion Standard. Cela inclut
          l'affichage des cartes, la navigation et les commandes vocales.
          L'accès aux fonctionnalités utilisant les données cellulaires et des
          licences tierces est susceptible d'être modifié
        </p>
        <img
          src="/media/energy-tag.avif"
          alt="graphic of energy score"
          className="footer-image"
        />
        <p className="footer-link">
          <span className="footer-link-item">Tesla © 2023</span>
        </p>
      </footer>
    </>
  );
};
