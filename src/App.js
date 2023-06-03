import styles from './App.css'
import { Link } from "react-scroll";
import './App.css'
import Profile from './Profile/Profile'
import Trabalhos from './Trabalhos/Trabalhos'

function App() {
  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul className={styles.ul}>
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
            <li>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <Profile />
      </section>
      <section id="projects">
        <Trabalhos />
      </section>
      <section id="blog">?????????</section>
      <section id="contact">FALA AÍ, TERRA!</section>

    </div>
  );
}
export default App