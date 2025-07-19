import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>DevMax Solutions</h1>
      <nav>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;