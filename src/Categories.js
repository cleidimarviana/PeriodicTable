import React, { Component } from 'react';
import './App.css';
import { Col } from 'react-bootstrap';
import data from './data.json';

class Categories extends Component {
    render() {

        var arr = [];

        data.categories.forEach(function (value, chave) {
            arr.push(<Col onMouseDown={() => console.log(value.description)}  style={{ background: value.colorhexa }}>{value.description}</Col>)
        });

        return arr;
    }
}

export default Categories;