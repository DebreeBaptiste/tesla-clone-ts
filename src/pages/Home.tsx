/* tools */
import { useContext, useEffect, useMemo, useState } from "react";
import { ColorContext } from "../Hooks/ColorContext";

/* components */
import { BackgroundSection } from "../components/Section/BackgroundSection";
import { Section } from "../components/Section";
import { SectionButton } from "../components/Section/SectionButton";
import { SectionModel } from "../components/Section/SectionModel";

import { HomeProps } from "../@types/data.js";
import { ItemProps } from "../@types/item.js";

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
        {data.items.map((item: ItemProps) => {
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
