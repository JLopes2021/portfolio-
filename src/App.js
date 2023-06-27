import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './Profile/Profile';
import Trabalhos from './Trabalhos/Trabalhos';
import Contato from './Profile/Contato/Contato'
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div className="App">
      <header className="nav">
        <Navbar />
      </header>
      <Container>
        <Row>
          <Col >
            <section id="about" className="section">
              <Profile />
            </section>
          </Col>
          <Col>
            <section id="projects">
              <Trabalhos />
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section id="contact">
              <Contato />
            </section>
          </Col>
        </Row>
      </Container>
      <footer>
        
        <div>
        <Navbar />
        </div>
      </footer>
    </div>
  );
}

export default App;
