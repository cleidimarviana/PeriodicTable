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

  render() {
    var all = [];
    var elements = [];

    var size = data.elements.length;
    for (var i = 0; i < size; i++) {

      var pos = data.elements[i].position;
      var ix = pos.split(",");

      // for(var j = 1; j <=18; j++){
      //   if(parseInt(ix[1])===j){
      //       elements.push(<Col> {data.elements[i].symbol}</Col>);
      //   } 
      // }

    }



    // for (var a = 0; a <= 6; a++) {
    //   var itens = [];
    //   for (var b = 0; b <= 17; b++) {



    //     var position = data.elements[b].position;
    //     var pos = position.split(",");

    //     console.log(pos);

    //     var line = a + 1;
    //     var col = b + 1;

    //     console.log("LOCA-> line: " + line + " col: " + col +
    //       "\nJSON->line: " + pos[0] + " col: " + pos[1]);

    //     if (parseInt(pos[0]) == line && parseInt(pos[1]) == col) {
    //       itens.push(<Col> {data.elements[b].symbol}</Col>);
    //     } else {
    //       itens.push(<Col className="col2"></Col>);
    //     }
    //   }
    //   elements[a] = itens;
    // }


    all.push(<Row>
      {
        elements
      }
    </Row>);
    return all;
  }
}

class MyCol extends Component {
  render() {

    if (this.props.sigla)
      return <Col onClick={() => console.log(this.props.sigla)}>
        <span>{this.props.sigla}</span>
      </Col>;
    else
      return <Col className="col2"></Col>;
  }
}

class App extends Component {

  constructor(props, context) {
    super(props, context);

  }

  clicaMemo = () => {
    alert();
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
            <Row>
              <MyCol sigla="H" />
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
              <MyCol sigla="HE"></MyCol>
            </Row>
            <Row>
              <MyCol sigla="Li" />
              <MyCol sigla="Be"></MyCol>
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
              <MyCol sigla="B" />
              <MyCol sigla="C" />
              <MyCol sigla="N" />
              <MyCol sigla="O" />
              <MyCol sigla="F" />
              <MyCol sigla="Ne" />
            </Row>

            <Row>
              <MyCol sigla="Na" />
              <MyCol sigla="Mg"></MyCol>
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
              <MyCol sigla="Al" />
              <MyCol sigla="Si" />
              <MyCol sigla="P" />
              <MyCol sigla="S" />
              <MyCol sigla="Cl" />
              <MyCol sigla="Ar" />
            </Row>

            <Row>
              <MyCol sigla="K" />
              <MyCol sigla="Ca" />
              <MyCol sigla="Sc" />
              <MyCol sigla="Ti" />
              <MyCol sigla="V" />
              <MyCol sigla="Cr" />
              <MyCol sigla="Mn" />
              <MyCol sigla="Fe" />
              <MyCol sigla="Co" />
              <MyCol sigla="Ni" />
              <MyCol sigla="Cu" />
              <MyCol sigla="Zn" />
              <MyCol sigla="Ga" />
              <MyCol sigla="Ge" />
              <MyCol sigla="As" />
              <MyCol sigla="Se" />
              <MyCol sigla="Br" />
              <MyCol sigla="Kr" />
            </Row>


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
