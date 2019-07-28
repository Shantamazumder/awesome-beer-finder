import React, { Component } from 'react';
import {Button } from 'react-bootstrap';
import './styles.scss';

export class SearchBar extends Component {

    render() {
        return (
            <div className="sidebarContent">
               <div><input className="searchInput"/></div>
                <Button variant="primary" size="lg">Left</Button>
            </div>
         
        )
    }
}