/* tools */
import { useContext, useEffect, useMemo, useState } from "react";
import { ColorContext } from "../../Hooks/ColorContext";

/* components */
import { BackgroundSection } from "../../components/HomeSection/BackgroundSection";
import { Section } from "../../components/HomeSection";
import { SectionButton } from "../../components/HomeSection/SectionButton";
import { SectionModel } from "../../components/HomeSection/SectionModel";

/* types */
import { HomeProps } from "../../@types/data.js";
import { ModelProps } from "../../@types/model.js";

export const Home = ({ data }: HomeProps) => {
  const [activeSection, setActiveSection] = useState<string>("discover-tesla");
  const [sectionData, setActiveSectionData] = useState<any>({});
  const [opacity, setOpacity] = useState<number>(1);
  const [timeline, setTimeline] = useState<boolean>(false);

  const { changeColor } = useContext(ColorContext);

  useEffect(() => {
    if (activeSection === "discover-tesla") {
      changeColor("white");
    } else {
      changeColor("black");
    }
  }, [activeSection]);

  useEffect(() => {
    setTimeout(() => {
      setTimeline(true);
    }, 1500);
  }, []);

  useMemo(() => {
    data.items.find((item: { className: string }) => {
      if (item.className === activeSection) {
        setActiveSectionData(item);
      }
    });
  }, [activeSection]);

  return (
    <main className="home">
      <Section>
        {data.items.map((item: ModelProps) => {
          return (
            <BackgroundSection
              data={item}
              key={item.id}
              setActiveSection={setActiveSection}
              setOpacity={(value) => setOpacity(value)}
            />
          );
        })}
        <SectionModel
          name={sectionData.title}
          slug={sectionData.bookTestDriveSlug}
          bookTestDrive={sectionData.bookTestDrive}
          bookTestDriveSlug={sectionData.bookTestDriveSlug}
          opacity={opacity}
          timeline={timeline}
        />
        <SectionButton
          name={sectionData.name}
          buttonDarkText={sectionData.buttonDarkText}
          buttonLightText={sectionData.buttonLightText}
          buttonTransparent={sectionData.buttonTransparent}
          opacity={opacity}
          timeline={timeline}
        />
      </Section>
    </main>
  );
};
