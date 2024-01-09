import logo from './logo.svg';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data';

function App() {

  let [dino] = useState(data);

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">DinoShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* main bg */}
      <div className='main-bg'></div>

      {/* main layout */}
      <Container>
        <Row>
          <Col className='main-layout'>
            <img src={process.env.PUBLIC_URL + '/img/dinosaur_1.jpg'}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col className='main-layout'>
            <img src={process.env.PUBLIC_URL + '/img/dinosaur_2.jpg'}/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col className='main-layout'>
            <img src={process.env.PUBLIC_URL + '/img/dinosaur_3.jpg'}/>
            <h4></h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
