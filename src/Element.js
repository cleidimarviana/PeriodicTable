import React, { Component } from 'react';
import { Col, Popover } from 'react-bootstrap';
import data from './data.json';

class Element extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = ({ target }) => {
      this.setState(s => ({ target, show: !s.show }));
    };

    this.state = {
      show: false,
    };
  }

  getColor(id){
    var result = data.categories.find(obj => {
      return obj.id === id
    })
    return result;
  }

  render() {

    if (this.props.element){

    var item = this.getColor(this.props.element.group);
    if(item){ 
      return <Col style={{ background: item.colorhexa }} onClick={this.handleClick}>
        <span style={{ fontSize: "9px", position: "absolute", marginTop: "2px", marginLeft: "-13px"  }} >{this.props.element.atomicnumber}</span>
        <span>{this.props.element.symbol}</span>
      
      </Col>
      ;
    }
    }else
      return <Col className="col2"></Col>;
  }
}

export default Element;