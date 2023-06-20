/* tools */
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ColorContext } from "../../Hooks/ColorContext";

/* types */
import { ModelProps } from "../../@types/model";

/* styles */
import "./styles.scss";
import { MobileContext } from "../../Hooks/mobileContext";

export const Model: React.FC<{ model: ModelProps }> = ({ model }) => {
  const { pathname } = useLocation();
  const { color, changeColor } = useContext(ColorContext);
  const { mobileDevice, changeMobileDevice } = useContext(MobileContext);

  // Check if device is mobile on resize window
  useEffect(() => {
    // Set isMobile state on component mount
    if (window.innerWidth <= 600) changeMobileDevice(true);
    // Update isMobile state on window resize
    function handleResize() {
      changeMobileDevice(window.innerWidth <= 600); // 600px is the breakpoint for mobile
    }

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/model3" || pathname === "/powerwall") {
      changeColor("white");
    } else {
      changeColor("black");
    }
  }, [pathname]);

  return (
    <div
      className="model-container"
      style={{
        backgroundImage: `url(${
          !mobileDevice
            ? model.images.detailBackgroundModel.mainModel
            : model.images.detailBackgroundModel.mainModelMobile
        })`,
      }}
    >
      <div className="model-title-container">
        {pathname !== "/powerwall" && pathname !== "/recharge" && (
          <>
            <h2 className={`model-title model-title-${color}`}>{model.name}</h2>
            <Link to="/" className={`model-link model-link-${color}`}>
              Véhicules disponibles
            </Link>
          </>
        )}
        {(pathname === "/powerwall" || pathname === "/recharge") && (
          <>
            <h2 className={`model-title model-title-${color}`}>{model.name}</h2>
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
  );
};
