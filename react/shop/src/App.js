import { useState, createContext } from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import axios from 'axios';

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [items] = useState([10, 11, 12]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Features
            </Nav.Link>

            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
              <div className="container">
                <div className="row">
                  {shoes.map((el, idx) => {
                    return <Card shoes={el} i={idx + 1} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get('https://codingapple1.github.io/shop/data2.json')
                    .then(res => {
                      let copy = [...shoes, ...res.data];
                      setShoes(copy);
                    })
                    .catch(() => console.log('err'));
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ items }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        {/* <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route> */}
      </Routes>
    </div>
  );
}

// function About() {
//   return (
//     <div>
//       <h4>회사정보</h4>
//       <Outlet></Outlet>
//     </div>
//   );
// }

function Card(props) {
  return (
    <div className="col-md-4">
      <img alt="" src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
