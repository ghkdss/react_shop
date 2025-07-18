import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import bg from './bg.jpg'

function App() {

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage:'url(' + bg + ')' }}></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={import.meta.env.BASE_URL + 'img/apple.jpg'} alt="" width='80%' />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={`${import.meta.env.BASE_URL}img/strawberry.jpg`} alt="" width='80%' />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={`${import.meta.env.BASE_URL}img/watermelon.jpg`} alt="" width='80%' />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
