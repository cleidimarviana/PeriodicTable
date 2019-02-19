import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Navbar, NavDropdown, FormControl, Form, Nav, Col } from 'react-bootstrap';
import data from './data.json';

var categories = data.categories;
console.log(categories);

categories.forEach(function (value, chave) {
  console.log(value.description);
});

class Categories extends Component {
  render() {

    var arr = [];

    data.categories.forEach(function (value, chave) {
      arr.push(<Col style={{ background: value.colorhexa }}>{value.description}</Col>)
    });

    return arr;
  }
}

class MyTable extends Component {

  getElement(num){
    var result = data.elements.find(obj => {
      return obj.atomicnumber === num
    })

    return result;
  }
 
  render() {

    return <div><Row>
    <MyCol element={this.getElement(1)}/>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol element={this.getElement(2)}></MyCol>
  </Row>
  <Row>
    <MyCol element={this.getElement(3)} />
    <MyCol element={this.getElement(4)}></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol element="B" />
    <MyCol element="C" />
    <MyCol element="N" />
    <MyCol element="O" />
    <MyCol element="F" />
    <MyCol element="Ne" />
  </Row>

  <Row>
    <MyCol element="Na" />
    <MyCol element="Mg"></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol></MyCol>
    <MyCol element="Al" />
    <MyCol element="Si" />
    <MyCol element="P" />
    <MyCol element="S" />
    <MyCol element="Cl" />
    <MyCol element="Ar" />
  </Row>

  <Row>
    <MyCol element="K" />
    <MyCol element="Ca" />
    <MyCol element="Sc" />
    <MyCol element="Ti" />
    <MyCol element="V" />
    <MyCol element="Cr" />
    <MyCol element="Mn" />
    <MyCol element="Fe" />
    <MyCol element="Co" />
    <MyCol element="Ni" />
    <MyCol element="Cu" />
    <MyCol element="Zn" />
    <MyCol element="Ga" />
    <MyCol element="Ge" />
    <MyCol element="As" />
    <MyCol element="Se" />
    <MyCol element="Br" />
    <MyCol element="Kr" />
  </Row></div>;

  }
}

class MyCol extends Component {
  render() {

    if (this.props.element)
      return <Col onClick={() => console.log(this.props.element)}>
        <span>{this.props.element.symbol}</span>
      </Col>;
    else
      return <Col className="col2"></Col>;
  }
}

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
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>

          <Container className="content" >

            <MyTable></MyTable>
            

            <Row className="categories">
              <Categories>

              </Categories>
            </Row>

          </Container>
        </header>
      </div>
    );
  }
}

export default App;
