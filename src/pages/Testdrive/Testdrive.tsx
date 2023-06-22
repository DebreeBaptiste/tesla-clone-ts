/* tools */
import { useContext, useEffect } from "react";
import { ColorContext } from "../../Hooks/ColorContext";

/* Components */
import { TestdriveTitle } from "../../components/TestdriveSection/TestdriveTitle";
import { TestdriveChoice } from "../../components/TestdriveSection/TestdriveChoice";
import { TestdriveForm } from "../../components/TestdriveSection/TestDriveForm";
import { Footer } from "../../components/Footer/Footer";

/* types */
import { HomeProps } from "../../@types/data";

/* styles */
import "./styles.scss";

export const Testdrive = ({ data }: HomeProps) => {
  const { changeColor } = useContext(ColorContext);

  // Change color of the header when the page is loaded
  useEffect(() => {
    changeColor("black");
  }, []);

  return (
    <>
      <main className="testdrive">
        <TestdriveTitle />
        <TestdriveChoice data={data} />
        <TestdriveForm />
      </main>
      <Footer />
    </>
  );
};
