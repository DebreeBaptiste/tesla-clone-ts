/* tools */
import { useLocation } from "react-router-dom";

/* types */
import { ModelProps } from "../../@types/model";

/* components */
import { Model } from "../../components/Model/Model";
import { ModelSpecifications } from "../../components/Model/ModelSpecifications/ModelSpecifications";
import { ModelToOrder } from "../../components/Model/ModelToOrder/ModelToOrder";
import { Footer } from "../../components/Footer/Footer";

/* style */
import "./styles.scss";
import { EnergySection } from "../../components/Model/EnergySection/EnergySection";

export const ModelDetails: React.FC<{ model: ModelProps }> = ({ model }) => {
  const { pathname } = useLocation();

  return (
    <>
      <main className="model">
        <Model model={model} />
        <div className="shadow-divider" />
        {pathname !== "/powerwall" && pathname !== "/recharge" && (
          <>
            <ModelSpecifications model={model} />
            <ModelToOrder model={model} />
          </>
        )}
        {pathname === "/powerwall" && <EnergySection model={model} />}
        {pathname === "/recharge" && <EnergySection model={model} />}
      </main>
      {pathname !== "/powerwall" && pathname !== "/recharge" && <Footer />}
    </>
  );
};
