import { useContext, useEffect } from "react";
import { ItemProps } from "../@types/item";

import { Link, useLocation } from "react-router-dom";
import { ColorContext } from "../Hooks/ColorContext";

import "./Model.scss";

export const Model = ({ data }: ItemProps) => {
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
    <main className="model">
      <div
        className="model-container"
        style={{
          backgroundImage: `url(${data.images.detailBackgroundModel.mainModel})`,
        }}
      >
        <div className="model-title-container">
          {pathname !== "/powerwall" && pathname !== "/recharge" && (
            <>
              <h2 className={`model-title model-title-${color}`}>
                {data.name}
              </h2>
              <Link to="/" className={`model-link model-link-${color}`}>
                Véhicules disponibles
              </Link>
            </>
          )}
          {(pathname === "/powerwall" || pathname === "/recharge") && (
            <>
              <h2 className={`model-title model-title-${color}`}>
                {data.name}
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
            {data.details.map((detail: any) => (
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
    </main>
  );
};
