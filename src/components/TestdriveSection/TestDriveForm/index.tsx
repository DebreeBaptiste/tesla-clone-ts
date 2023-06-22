/* styles */
import "./styles.scss";

export const TestdriveForm: React.FC = () => {
  return (
    <section className="testdrive-form-container">
      <h3 className="testdrive-form-title">Comment Nous Contacter</h3>
      <form className="testdrive-form">
        <div className="testdrive-form-input-container">
          <label className="testdrive-form-label" htmlFor="firstname">
            <span className="testdrive-form-label-text">Prénom</span>
            <input
              className="testdrive-form-input"
              type="text"
              name="firstname"
              id="firstname"
            />
          </label>
          <label className="testdrive-form-label" htmlFor="lastname">
            <span className="testdrive-form-label-text">Nom</span>
            <input
              className="testdrive-form-input"
              type="text"
              name="lastname"
              id="lastname"
            />
          </label>
        </div>
        <div className="testdrive-form-input-container">
          <label className="testdrive-form-label" htmlFor="phone">
            <span className="testdrive-form-label-text">Téléphone</span>
            <input
              className="testdrive-form-input"
              type="text"
              name="phone"
              id="phone"
            />
          </label>
          <label className="testdrive-form-label" htmlFor="email">
            <span className="testdrive-form-label-text">Adresse e-mail</span>
            <input
              className="testdrive-form-input"
              type="text"
              name="email"
              id="email"
            />
          </label>
        </div>
        <div className="testdrive-form-input-container">
          <label className="testdrive-form-label" htmlFor="zipcode">
            <span className="testdrive-form-label-text">Code postal</span>
            <input
              className="testdrive-form-input"
              type="text"
              name="zipcode"
              id="zipcode"
            />
          </label>
        </div>
        <div className="testdrive-form-input-container">
          <label className="testdrive-form-checkbox-label" htmlFor="news">
            <input
              className="testdrive-form-checkbox-input"
              type="checkbox"
              name="news"
              id="news"
            />
            <span className="testdrive-form-checkbox-label-text">
              Recevoir les News Tesla
            </span>
          </label>
        </div>
        <p className="testdrive-form-disclamer-text">
          En cliquant sur « Envoyer et continuer », j'accepte d'être contacté(e)
          au numéro indiqué pour recevoir plus d'informations ou d'offres sur
          les produits Tesla. Je comprends que ces appels ou ces SMS peuvent
          faire appel à une numérotation assistée par ordinateur ou comporter
          des messages préenregistrés. Ce consentement ne constitue pas une
          condition de l'essai.
        </p>
        <div className="testdrive-form-input-container">
          <button className="testdrive-form-submit-button" type="submit">
            Envoyer et continuer
          </button>
        </div>
      </form>
    </section>
  );
};
