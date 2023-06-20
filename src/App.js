import { Link } from "react-scroll";
import './App.css';
import Profile from './Profile/Profile';
import Trabalhos from './Trabalhos/Trabalhos';
import Navbar from './Layout/Navbar';
import Escrever from './Trabalhos/Escrever/Escritas'

function App() {
  return (
    <div className="App">
      <header className="nav">
        <Navbar />
      </header>
      <div className="container_profile">
        <section id="about">
          <Profile />
        </section>
      </div>
      <section id="projects">
        <Trabalhos />
      </section>
      <section id="blog">
        <Escrever />
      </section>
      <section id="contact">FALA AÍ, TERRA!</section>

      <footer className="nav_footer">
        <nav className="nav__container__actions_footer">
          <ul className="ul">
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
              <Link activeClass="active" smooth spy to="blog">
                ????????
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                MEUS CONTATOS
              </Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
