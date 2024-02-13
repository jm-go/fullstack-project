import { ChangeEvent, useState } from "react";
import "./Header.scss";

type HeaderProps = {
  onSearch: (value: string) => void;
};

const Header = ({ onSearch }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__greeting">Hey there, bookaholic!</h1>
        <p className="header__explore">
          Dive into my personal library with a click
        </p>

        <div className="header__search">
          <input
            className="header__search header__search--input"
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleInputChange}
          />
          <button className="header__button" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
