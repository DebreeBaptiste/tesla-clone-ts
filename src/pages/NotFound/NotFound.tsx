/* tools */
import { useContext, useEffect } from "react";
import { ColorContext } from "../../Hooks/ColorContext";

/* style */
import "./styles.scss";

export const NotFound = () => {
  const { changeColor } = useContext(ColorContext);

  useEffect(() => {
    changeColor("black");
  }, []);

  return (
    <>
      <div className="not-found">
        <h2 className="text-404">404</h2>
        <h3 className="text-not-found">Page not found</h3>
      </div>
    </>
  );
};
