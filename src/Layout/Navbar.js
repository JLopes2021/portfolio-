import { Link } from "react-scroll";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav__container__actions">
      <ul>
        <li>
          <Link activeClass="active" smooth spy to="about">
            SOBRE MIM
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="projects">
            PROJETOS
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="contact">
            CONTATOS
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
