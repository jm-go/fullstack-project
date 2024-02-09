import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__greeting">Hey there, bookaholic!</h1>
        <p className="header__explore">
          Explore the world of (my) books with a click
        </p>

        <div className="header__search">
          <input
            className="header__search header__search--input"
            type="text"
            placeholder="Search..."
          />
          <button className="header__button">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
