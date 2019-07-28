import React, {Component} from 'react';
import Card from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';

export class Fav extends Component {

    render() {
        const selectedFavItems = JSON.parse(localStorage.getItem('favItems'));
        return(
            <Container>
             <Row style={{paddingTop: '2rem'}}>
                 {selectedFavItems.map((i) => {
                    return <Col key={i.name} index={i} sm={4}>
                      <Card item={i} favItemList={selectedFavItems}/>
                     </Col>
                 })
                }               
             </Row>
         </Container>
        )
    }
}

export default Fav;