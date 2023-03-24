import { useEffect, useRef } from "react";

import "./styles.scss";

interface BackgroundSectionProps {
  data: {
    id: number;
    className: string;
    backgroundImg: string;
  };
  setActiveSection: (section: string) => void;
  setOpacity: (opacity: number) => void;
}

export const BackgroundSection = ({
  data: { className, backgroundImg },
  setActiveSection,
  setOpacity,
}: BackgroundSectionProps) => {
  const BackgroundSectionRef = useRef<HTMLDivElement>(null);

  // Observer for section change when scrolling
  useEffect(() => {
    // Options for IntersectionObserver
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: [0.49, 0.5, 0.51, 0.89, 0.9, 0.91],
    };

    // Change active section when scrolling
    const handleChangeSection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio < 0.9 && entry.isIntersecting) {
          setOpacity(0);
        } else if (entry.intersectionRatio > 0.5 && entry.isIntersecting) {
          console.log("opacity: 1", entry.target.className);
          setOpacity(1);
        }
        // Set active section
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.className);
        }
      });
    };

    // Create IntersectionObserver
    const obserser = new IntersectionObserver(
      (entries) => handleChangeSection(entries),
      option
    );

    // Observe BackgroundSectionRef
    obserser.observe(BackgroundSectionRef.current!);
  });

  return (
    <div ref={BackgroundSectionRef} className={className}>
      <div
        className="image"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
    </div>
  );
};
