/* style */
import "./styles.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Certaines fonctionnalités du véhicule consomment une grande quantité de
        données et nécessitent au moins la Connexion Standard. Cela inclut
        l'affichage des cartes, la navigation et les commandes vocales. L'accès
        aux fonctionnalités utilisant les données cellulaires et des licences
        tierces est susceptible d'être modifié
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
  );
};
