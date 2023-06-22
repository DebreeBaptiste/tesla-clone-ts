/* tools */
import { useContext, useEffect, useRef } from "react";
import { MobileContext } from "../../Hooks/mobileContext";

/* types */
import { ModelProps } from "../../@types/model";

/* styles */
import "./styles.scss";

interface BackgroundSectionProps {
  data: ModelProps;
  setActiveSection: (section: string) => void;
  setOpacity: (opacity: number) => void;
}

export const BackgroundSection = ({
  data: { className, images },
  setActiveSection,
  setOpacity,
}: BackgroundSectionProps) => {
  // check if device is mobile

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

  /* OBSERVER LOGIC */
  const BackgroundSectionRef = useRef<HTMLDivElement>(null);

  // Observer for section change when scrolling
  useEffect(() => {
    // Options for IntersectionObserver
    const option = {
      root: document.querySelector("#root"),
      rootMargin: "0px",
      threshold: [0.49, 0.5, 0.51, 0.89, 0.9, 0.91],
    };

    // Change active section when scrolling
    const handleChangeSection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio < 0.9 && entry.isIntersecting) {
          setOpacity(0);
        } else if (entry.intersectionRatio > 0.5 && entry.isIntersecting) {
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
    <div ref={BackgroundSectionRef} className={`${className}`}>
      {images.homeBackgroundDesktop.slice(-3) === "mp4" ||
      images.homeBackgroundMobile.slice(-3) === "mp4" ? (
        <div className="video-overlay">
          <video
            className="video"
            muted
            autoPlay
            loop
            playsInline
            controls={false}
            width="100%"
            height="100%"
          >
            <source
              src={
                mobileDevice
                  ? images.homeBackgroundMobile
                  : images.homeBackgroundDesktop
              }
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        <img
          className="image"
          src={
            mobileDevice
              ? images.homeBackgroundMobile
              : images.homeBackgroundDesktop
          }
          alt="picture of a tesla car"
        />
      )}
    </div>
  );
};
