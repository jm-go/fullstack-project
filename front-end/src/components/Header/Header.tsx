import { ChangeEvent } from "react";
import "./Header.scss";

type HeaderProps = {
  onSearch: (value: string) => void;
  searchValue: string;
};

const Header = ({ onSearch, searchValue }: HeaderProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
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
        </div>
      </div>
    </header>
  );
};

export default Header;
