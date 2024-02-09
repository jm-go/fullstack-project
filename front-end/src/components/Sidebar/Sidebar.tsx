import './Sidebar.scss'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <span className="sidebar__item sidebar__item--icon">🏠</span> 
          </li>
          <li className="sidebar__item">
            <span className="sidebar__item sidebar__item--icon">⭐</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;