import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header-content">
        <nav className="nav-home">
          <ul className="nav-home__list">
            <li className="timer">00:29:53</li>
            <li className="user-greeting"> Bienvenido John Doe </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
