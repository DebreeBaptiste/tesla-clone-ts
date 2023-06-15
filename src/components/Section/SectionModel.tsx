/* Tool */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorContext } from "../../Hooks/ColorContext";

/* Style */
import "./styles.scss";

interface ModelProps {
  name: string;
  slug: string;
  bookTestDrive?: string;
  bookTestDriveSlug: string;
  opacity: number;
  timeline: boolean;
}

export const SectionModel = ({
  name,
  slug,
  bookTestDrive,
  bookTestDriveSlug,
  opacity,
  timeline,
}: ModelProps) => {
  const { color } = useContext(ColorContext);

  return (
    <div
      className={`section-title-container ${
        color === "white" ? "section-title-container-white" : ""
      }`}
      style={{ opacity: `${opacity}` }}
    >
      <h2 className={`section-title ${slug} visible-${timeline}`}>{name}</h2>

      {bookTestDrive && (
        <Link
          to={bookTestDriveSlug}
          className={`section-link visible-${timeline}`}
        >
          {bookTestDrive}
        </Link>
      )}
    </div>
  );
};
