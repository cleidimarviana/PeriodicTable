import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Container,Row,Navbar,NavDropdown, FormControl, Form, Nav, Col } from 'react-bootstrap';


class MyBytton extends Component{
  render(){
    return <Button>Button teste</Button>
  }
  
}

class MyCol extends Component{
  render(){

    if(this.props.sigla)
      return <Col onClick={()=> console.log(this.props.sigla)} className="">
      <span className="sigla">{this.props.sigla}</span>  
      <span className="elemento"> {this.props.elemento}</span>     
      </Col>;
    else 
      return <Col className="col2 btn"></Col>;
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
        <Row>
          <MyCol sigla="H" elemento="Hidrogênio"/>
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
          <MyCol sigla="HE" elemento="Hélio"></MyCol>       
       </Row>
       <Row>
          <MyCol sigla="Li"/>
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
          <MyCol sigla="B"/>
          <MyCol sigla="C"/>
          <MyCol sigla="N"/>
          <MyCol sigla="O"/>
          <MyCol sigla="F"/>
          <MyCol sigla="Ne"/>   
       </Row>

       <Row>
          <MyCol sigla="Na"/>
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
          <MyCol sigla="Al"/>
          <MyCol sigla="Si"/>
          <MyCol sigla="P"/>
          <MyCol sigla="S"/>
          <MyCol sigla="Cl"/>
          <MyCol sigla="Ar"/>   
       </Row>

       <Row>
          <MyCol sigla="K"/>
          <MyCol sigla="Ca"/>       
          <MyCol sigla="Sc"/>  
          <MyCol sigla="Ti"/>       
          <MyCol sigla="V"/>
          <MyCol sigla="Cr"/>
          <MyCol sigla="Mn"/>
          <MyCol sigla="Fe"/>
          <MyCol sigla="Co"/>
          <MyCol sigla="Ni"/>
          <MyCol sigla="Cu"/>
          <MyCol sigla="Zn"/>
          <MyCol sigla="Ga"/>
          <MyCol sigla="Ge"/>
          <MyCol sigla="As"/>
          <MyCol sigla="Se"/>
          <MyCol sigla="Br"/>
          <MyCol sigla="Kr"/>   
       </Row>
      </Container>
     
            
        </header>
      </div>
    );
  }
}

export default App;
