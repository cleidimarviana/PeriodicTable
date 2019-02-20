import React, { Component } from 'react';
import { Col, Popover, Overlay, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import data from './data.json';

class Element extends Component {

  constructor(props, context) {
    super(props, context);
  }

  getColor(id) {
    var result = data.categories.find(obj => {
      return obj.id === id
    })
    return result;
  }

  render() {

    if (this.props.element) {

      var item = this.getColor(this.props.element.group);
      if (item) {
        return <Col style={{ background: item.colorhexa }}>
          <span style={{ fontSize: "9px", position: "absolute", marginTop: "2px", marginLeft: "-13px" }} >{this.props.element.atomicnumber}</span>
          <span>{this.props.element.symbol}</span>
          
        </Col>;
      }
    } else
      return <Col className="col2"></Col>;
  }
}

export default Element;