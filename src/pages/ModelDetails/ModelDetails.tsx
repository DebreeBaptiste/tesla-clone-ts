/* types */
import { ModelProps } from "../../@types/model";

/* components */
import { Model } from "../../components/Model/Model";
import { ModelSpecifications } from "../../components/ModelSpecifications/ModelSpecifications";
import { ModelToOrder } from "../../components/ModelToOrder/ModelToOrder";
import { Footer } from "../../components/Footer/Footer";

/* style */
import "./styles.scss";

export const ModelDetails: React.FC<{ model: ModelProps }> = ({ model }) => {
  return (
    <>
      <main className="model">
        <Model model={model} />
        <div className="shadow-divider" />
        <ModelSpecifications model={model} />
        <ModelToOrder model={model} />
      </main>
      <Footer />
    </>
  );
};
