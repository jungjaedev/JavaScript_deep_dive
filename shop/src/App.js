import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import Data from './data';
import Detail from './Detail';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">
              {shoes.map((item, i) => {
                return <Card shoes={shoes[i]} key={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>

        <Route path="/:id">
          <div>홀라이꼼</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card({ shoes }) {
  return (
    <div className="col-md-4">
      <img src={shoes.img} width="100%" />
      <h4>{shoes.title}</h4>
      <p>
        {shoes.content} & {shoes.price}
      </p>
    </div>
  );
}

export default App;
