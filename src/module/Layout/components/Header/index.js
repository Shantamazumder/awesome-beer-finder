import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';
import {Link} from 'react-router-dom';
export class Header extends Component {
    
    render() {
        return (
            <div className="container">
                <Container className="header-bg">
                    <Row>
                        <Col className="header-title" sm ={10}>Beans Love Beers</Col>
                        <Col className="header-element" sm ={1}>
                            <Link to ='/' className="text-link">Home</Link> 
                        </Col>
                        <Col className="header-element" sm ={1}>
                        <Link to ='/Fav' className="text-link">Favourites</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}

