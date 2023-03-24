/* tools */
import { useMemo, useState } from "react";

/* components */
import { BackgroundSection } from "../components/Section/BackgroundSection";
import { Section } from "../components/Section";
import { SectionButton } from "../components/Section/SectionButton";
import { SectionModel } from "../components/Section/SectionModel";

import { HomeProps } from "../@types/data.js";

export const Home = ({ data }: HomeProps) => {
  const [activeSection, setActiveSection] = useState<string>("modely");
  const [sectionData, setActiveSectionData] = useState<any>({});
  const [opacity, setOpacity] = useState<number>(1);

  useMemo(() => {
    data.items.find((item: { className: string }) => {
      if (item.className === activeSection) {
        setActiveSectionData(item);
      }
    });
  }, [activeSection]);

  return (
    <div className="home">
      <Section>
        {data.items.map(
          (item: { id: number; className: string; backgroundImg: string }) => {
            return (
              <BackgroundSection
                data={item}
                key={item.id}
                setActiveSection={setActiveSection}
                setOpacity={(value) => setOpacity(value)}
              />
            );
          }
        )}
        <SectionModel
          name={sectionData.title}
          slug={sectionData.bookTestDriveSlug}
          bookTestDrive={sectionData.bookTestDrive}
          bookTestDriveSlug={sectionData.bookTestDriveSlug}
          opacity={opacity}
        />
        <SectionButton
          name={sectionData.name}
          buttonDarkText={sectionData.buttonDarkText}
          buttonLightText={sectionData.buttonLightText}
          opacity={opacity}
        />
      </Section>
    </div>
  );
};
