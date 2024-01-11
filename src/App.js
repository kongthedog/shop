import logo from './logo.svg';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail'

function App() {

  let [dino] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">DinoShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <div>
            {/* main bg */}
            <div className='main-bg'></div>
            {/* main layout */}
            <Container>
              <Row>
                {
                  dino.map((a, i) => {
                    return <Card dino={dino[i]} key={i}></Card>
                  })
                }
              </Row>
            </Container>
          </div>
        } />
        <Route path="/detail/:id" element={<Detail dino={dino}/>}/>

      </Routes>


    </div>
  );
}

function Card(props) {
  return (
    <Col className='main-layout' >
      <img src={process.env.PUBLIC_URL + '/img/dinosaur_'+ props.dino.id +'.jpg'} 
        path={"/detail/"+props.dino.id}/>
      <h5>{ props.dino.title }</h5>
      <p>{ props.dino.content }</p>
      <p>{ props.dino.price }</p>
    </Col>
  )
}

function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
