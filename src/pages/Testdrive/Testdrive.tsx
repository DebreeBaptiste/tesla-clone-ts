/* types */
import { HomeProps } from "../../@types/data";

/* styles */
import "./styles.scss";

export const Testdrive = ({ data }: HomeProps) => {
  return (
    <main className="testdrive">
      <section className="testdrive-title-container">
        <h2 className="testdrive-title">Réservez votre essai</h2>
        <p className="testdrive-description">
          Essayez une Tesla dans un magasin près de chez vous. Les conducteurs
          doivent être titulaires d'un permis de conduire valide. Pour conduire
          la Model S et le Model X, vous devez être titulaire d'un permis de
          conduire valide depuis au moins sept ans.
        </p>
      </section>

      <section className="testdrive-choice">
        <div className="testdrive-choice-button-container">
          <button className="testdrive-button-model"></button>
          <button className="testdrive-button-model"></button>
          <button className="testdrive-button-model"></button>
          <button className="testdrive-button-model"></button>
        </div>
        <div className="testdrive-choice-image-container">
          <img
            className="testdrive-choice-image"
            alt={`picture of {model} tesla car`}
          />
        </div>
      </section>
      <section className="testdrive-form-container">
        <h3>Comment Nous Contacter</h3>
        <form className="testdrive-form">
          <div className="testdrive-form-input-container">
            <label htmlFor="firstname">
              Prénom
              <input type="text" name="firstname" id="firstname" />
            </label>
            <label htmlFor="lastname">
              Nom
              <input type="text" name="lastname" id="lastname" />
            </label>
          </div>
          <div className="testdrive-form-input-container">
            <label htmlFor="phone">
              Téléphone
              <input type="text" name="phone" id="phone" />
            </label>
            <label htmlFor="email">
              Adresse e-mail
              <input type="text" name="email" id="email" />
            </label>
          </div>
          <div className="testdrive-form-input-container">
            <label htmlFor="zipcode">
              Code postal
              <input type="text" name="zipcode" id="zipcode" />
            </label>
          </div>
          <div className="testdrive-form-input-container">
            <label htmlFor="news">
              Recevoir les News Tesla
              <input type="checkbox" name="news" id="news" />
            </label>
          </div>
          <p>
            En cliquant sur « Envoyer et continuer », j'accepte d'être
            contacté(e) au numéro indiqué pour recevoir plus d'informations ou
            d'offres sur les produits Tesla. Je comprends que ces appels ou ces
            SMS peuvent faire appel à une numérotation assistée par ordinateur
            ou comporter des messages préenregistrés. Ce consentement ne
            constitue pas une condition de l'essai.
          </p>
          <button className="testdrive-form-button">
            Envoyer et continuer
          </button>
        </form>
      </section>
    </main>
  );
};
