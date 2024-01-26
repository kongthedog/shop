import logo from './logo.svg';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useQuery } from "react-query"
import axios from 'axios'

//import Detail from './pages/Detail.js'
//import Cart from './pages/Cart'

const Detail = lazy(() => import('./pages/Detail.js'));
const Cart = lazy(() => import('./pages/Cart'));


function App() {

  useEffect(()=>{
    localStorage.setItem('watched',JSON.stringify([]))
  },[])

  let [dino, setDino] = useState(data);
  let navigate = useNavigate();

  let result = useQuery('getUser', ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>
      a.data
    )
  )

  return (
    <div className='App'>

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>DinoShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            { result.isLoading ? 'loading...' : result.data.name}
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
            {/* <button onClick={()=>{
            axios.get('url')
            .then((add)=>{ 
              let copy = [...dino, ...add.data];
              setDino(copy);
            })
            .catch(()=>{
              console.log('fail');
            })
          }}>버튼</button> */}
          </div>
        } />
        <Route path="/detail/:id" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Detail dino={dino} />
          </Suspense>
        } />

        <Route path='/cart' element={<Cart />} />

      </Routes>


    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();
  return (
    <Col className='main-layout' onClick={() => { navigate('/detail/' + props.dino.id) }} >
      <img src={process.env.PUBLIC_URL + '/img/dinosaur_' + props.dino.id + '.jpg'}
        path={"/detail/" + props.dino.id} />
      <h5>{props.dino.title}</h5>
      <p>{props.dino.content}</p>
      <p>{props.dino.price}</p>
    </Col>
  )
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
