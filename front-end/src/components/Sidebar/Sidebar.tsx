import { Heart, Home } from "lucide-react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link to="/">
              <Home className="sidebar__item sidebar__item--icon" />
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/favourites">
              <Heart className="sidebar__item sidebar__item--icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
