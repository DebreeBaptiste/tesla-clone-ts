/* styles */
import "./styles.scss";

export const TestdriveTitle: React.FC = () => {
  return (
    <section className="testdrive-title-container">
      <h2 className="testdrive-title">Réservez votre essai</h2>
      <p className="testdrive-description">
        Essayez une Tesla dans un magasin près de chez vous. Les conducteurs
        doivent être titulaires d'un permis de conduire valide. Pour conduire la
        Model S et le Model X, vous devez être titulaire d'un permis de conduire
        valide depuis au moins sept ans.
      </p>
    </section>
  );
};
