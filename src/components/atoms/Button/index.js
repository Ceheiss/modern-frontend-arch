import "../../../theme.css";
import "./Button.css";

export default function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
