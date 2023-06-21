/* tools */
import { useState } from "react";

/* Components */
import { Footer } from "../../components/Footer/Footer";

/* styles */
import "./styles.scss";

export const Exchange: React.FC = () => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const [keepTooltipOpen, setKeepTooltipOpen] = useState(false);

  const handleTooltipMouseEvent = (event: any) => {
    if (event.type === "click") {
      if (event.target.className !== "exchange-form-button-tooltip") {
        setOpenTooltip(false);
        return setKeepTooltipOpen(false);
      }

      setOpenTooltip(true);
      return setKeepTooltipOpen(true);
    }

    if (event.type === "mouseenter" && !keepTooltipOpen) {
      return setOpenTooltip((prev) => !prev);
    }
    if (event.type === "mouseleave" && !keepTooltipOpen) {
      return setOpenTooltip((prev) => !prev);
    }
  };

  const handleClick = (event: any) => {
    handleTooltipMouseEvent(event);
  };

  return (
    <>
      <main className="exchange" onClick={handleClick}>
        <div className="exchange-container">
          <section className="exchange-image-container">
            <img
              className="exchange-image"
              src="/media/exchange.webp"
              alt="picture of blue and red tesla cars"
            />
          </section>
          <section className="exchange-content-container">
            <h2 className="exchange-content-title">
              Obtenir une estimation de reprise
            </h2>
            <p className="exchange-content-text">
              Faites reprendre votre véhicule actuel contre une nouvelle Tesla.
              Saisissez votre plaque d'immatriculation et votre VIN pour
              recevoir une estimation de reprise.
            </p>
            <form className="exchange-form">
              <label className="exchange-form-label">
                <span className="exchange-form-label-text">
                  Numéro d'immatriculation
                </span>
                <input className="exchange-form-input" type="text" />
              </label>
              <label className="exchange-form-label">
                <span className="exchange-form-label-text">
                  Saisissez le code VIN
                </span>
                <input className="exchange-form-input" type="text" />
              </label>
              <div className="exchange-form-tooltip-container">
                <div
                  className={`exchange-form-tooltip ${
                    openTooltip ? "tooltip--open" : ""
                  }`}
                >
                  <p className="exchange-form-tooltip-text">
                    Le VIN se trouve souvent sur le titre de propriété du
                    véhicule et dans le coin inférieur gauche du tableau de
                    bord, devant le volant
                  </p>
                </div>

                <button
                  className="exchange-form-button-tooltip"
                  type="button"
                  onClick={handleClick}
                  onMouseEnter={handleTooltipMouseEvent}
                  onMouseLeave={handleTooltipMouseEvent}
                >
                  Où puis-je trouver mon VIN ?
                </button>
              </div>
              <button className="exchange-form-button-submit" type="submit">
                Obtenir une estimation
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
