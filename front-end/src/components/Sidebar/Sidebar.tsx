import { Heart, Home } from "lucide-react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Home className="sidebar__item sidebar__item--icon" />
          </li>
          <li className="sidebar__item">
            <Heart className="sidebar__item sidebar__item--icon" />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
