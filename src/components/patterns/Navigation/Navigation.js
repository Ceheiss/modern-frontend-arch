import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/userProfile" className="nav-link">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
