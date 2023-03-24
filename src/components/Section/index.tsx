/* Style */
import "./styles.scss";

interface SectionProps {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return <section className="section-container">{children}</section>;
};
