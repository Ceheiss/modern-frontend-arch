import "../../../theme.css";
import "./Card.css";

export default function Card({ children, highlight }) {
  const cardClassName = highlight ? "card sale" : "card";
  return <div className={cardClassName}>{children}</div>;
}
