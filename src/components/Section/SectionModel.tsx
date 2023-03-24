/* Tool */
import { Link } from "react-router-dom";

/* Style */
import "./styles.scss";

interface ModelProps {
  name: string;
  slug: string;
  bookTestDrive?: string;
  bookTestDriveSlug: string;
  opacity: number;
}

export const SectionModel = ({
  name,
  slug,
  bookTestDrive,
  bookTestDriveSlug,
  opacity,
}: ModelProps) => {
  return (
    <div className="section-title-container" style={{ opacity: `${opacity}` }}>
      <h2 className={`section-title ${slug}`}>{name}</h2>

      {bookTestDrive && (
        <Link to={bookTestDriveSlug} className="section-link">
          {bookTestDrive}
        </Link>
      )}
    </div>
  );
};
