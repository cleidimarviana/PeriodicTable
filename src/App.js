import React, { Component } from 'react';
import './App.css';
import { Button, Container, Row, Navbar, Nav } from 'react-bootstrap';
import Categories from './Categories';
import Table from './Table';


class App extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">

          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">PeriodicTable</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>            
            </Navbar.Collapse>
          </Navbar>

          <Container className="content" >

            <Table/>
            

            <Row className="categories">
              <Categories/>
            </Row>

          </Container>
        </header>
      </div>
    );
  }
}

export default App;
