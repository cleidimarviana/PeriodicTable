import React, { Component } from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import data from './data.json';
import Element from './Element';

class Table extends Component {

    getElement(num){
      var result = data.elements.find(obj => {
        return obj.atomicnumber === num
      })
      return result;
    }
   
    render() { 
  
      var all = [];
  
      var elements = data.elements;
  
      for(var i = 0; i<elements.lenght; i++){
        var pos = elements[i].position;
        var pos2 = pos.split(",");
        if(pos2[0]==1 && pos2[1]==1){
          all.push();
        }
      }
  
      return <div><Row>
      <Element element={this.getElement(1)}/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element element={this.getElement(2)}></Element>
    </Row>
    <Row>
      <Element element={this.getElement(3)} />
      <Element element={this.getElement(4)}></Element>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element element={this.getElement(5)} />
      <Element element={this.getElement(6)} />
      <Element element={this.getElement(7)} />
      <Element element={this.getElement(8)} />
      <Element element={this.getElement(9)} />
      <Element element={this.getElement(10)} />
    </Row>
  
    <Row>
      <Element element={this.getElement(11)} />
      <Element element={this.getElement(12)}></Element>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element element={this.getElement(13)} />
      <Element element={this.getElement(14)}/>
      <Element element={this.getElement(15)} />
      <Element element={this.getElement(16)} />
      <Element element={this.getElement(17)} />
      <Element element={this.getElement(18)} />
    </Row>
  
    <Row>
      <Element element={this.getElement(19)} />
      <Element element={this.getElement(20)} />
      <Element element={this.getElement(21)} />
      <Element element={this.getElement(22)} />
      <Element element={this.getElement(23)} />
      <Element element={this.getElement(24)} />
      <Element element={this.getElement(25)} />
      <Element element={this.getElement(26)} />
      <Element element={this.getElement(27)} />
      <Element element={this.getElement(28)} />
      <Element element={this.getElement(29)} />
      <Element element={this.getElement(30)} />
      <Element element={this.getElement(31)} />
      <Element element={this.getElement(32)} />
      <Element element={this.getElement(33)} />
      <Element element={this.getElement(34)} />
      <Element element={this.getElement(35)} />
      <Element element={this.getElement(36)} />
    </Row>
  
    
    <Row>
      <Element element={this.getElement(37)} />
      <Element element={this.getElement(38)} />
      <Element element={this.getElement(39)} />
      <Element element={this.getElement(40)} />
      <Element element={this.getElement(41)} />
      <Element element={this.getElement(42)} />
      <Element element={this.getElement(43)} />
      <Element element={this.getElement(44)} />
      <Element element={this.getElement(45)} />
      <Element element={this.getElement(46)} />
      <Element element={this.getElement(47)} />
      <Element element={this.getElement(48)} />
      <Element element={this.getElement(49)} />
      <Element element={this.getElement(50)} />
      <Element element={this.getElement(51)} />
      <Element element={this.getElement(52)} />
      <Element element={this.getElement(53)} />
      <Element element={this.getElement(54)} />
    </Row>
  
    <Row>
      <Element element={this.getElement(55)} />
      <Element element={this.getElement(56)} />
      <Element />
      <Element element={this.getElement(72)} />
      <Element element={this.getElement(73)} />
      <Element element={this.getElement(74)} />
      <Element element={this.getElement(75)} />
      <Element element={this.getElement(76)} />
      <Element element={this.getElement(77)} />
      <Element element={this.getElement(78)} />
      <Element element={this.getElement(79)} />
      <Element element={this.getElement(80)} />
      <Element element={this.getElement(81)} />
      <Element element={this.getElement(82)} />
      <Element element={this.getElement(83)} />
      <Element element={this.getElement(84)} />
      <Element element={this.getElement(85)} />
      <Element element={this.getElement(86)} />
    </Row>
  
    <Row>
      <Element element={this.getElement(87)} />
      <Element element={this.getElement(88)} />
      <Element />
      <Element element={this.getElement(104)} />
      <Element element={this.getElement(105)} />
      <Element element={this.getElement(106)} />
      <Element element={this.getElement(107)} />
      <Element element={this.getElement(108)} />
      <Element element={this.getElement(109)} />
      <Element element={this.getElement(110)} />
      <Element element={this.getElement(111)} />
      <Element element={this.getElement(112)} />
      <Element element={this.getElement(113)} />
      <Element element={this.getElement(114)} />
      <Element element={this.getElement(115)} />
      <Element element={this.getElement(116)} />
      <Element element={this.getElement(117)} />
      <Element element={this.getElement(118)} />
    </Row>
    <Row>
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
    </Row>
    <Row>
      <Element />
      <Element />
      <Element />
      <Element element={this.getElement(57)} />
      <Element element={this.getElement(58)} />
      <Element element={this.getElement(59)} />
      <Element element={this.getElement(60)} />
      <Element element={this.getElement(61)} />
      <Element element={this.getElement(62)} />
      <Element element={this.getElement(63)} />
      <Element element={this.getElement(64)} />
      <Element element={this.getElement(65)} />
      <Element element={this.getElement(66)} />
      <Element element={this.getElement(67)} />
      <Element element={this.getElement(68)} />
      <Element element={this.getElement(69)} />
      <Element element={this.getElement(70)} />
      <Element element={this.getElement(71)} />
    </Row>
    <Row>
      <Element />
      <Element />
      <Element />
      <Element element={this.getElement(89)} />
      <Element element={this.getElement(90)} />
      <Element element={this.getElement(91)} />
      <Element element={this.getElement(92)} />
      <Element element={this.getElement(93)} />
      <Element element={this.getElement(94)} />
      <Element element={this.getElement(95)} />
      <Element element={this.getElement(96)} />
      <Element element={this.getElement(97)} />
      <Element element={this.getElement(98)} />
      <Element element={this.getElement(99)} />
      <Element element={this.getElement(100)} />
      <Element element={this.getElement(101)} />
      <Element element={this.getElement(102)} />
      <Element element={this.getElement(103)} />
    </Row>
    </div>;
  
    }
  }
  

export default Table;