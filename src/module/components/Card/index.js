import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

const Card = ({item, favItemClicked, favItemList}) => {
    const isFavItem = favItemList.find((favItem) => {
       return favItem.name === item.name;
    })
    const itemDescription = item.description.length > 200 ? `${item.description.substr(0, 200)}...` : item.description;
    return(
        <Container  className="item-container">  
            {favItemClicked && <div>
                <svg className={isFavItem ? "star-nonfill star-fill" : "star-nonfill"} onClick={() => favItemClicked(item)}>
                    <polygon
                    points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                    style={{ fillRule: "nonzero" }}
                    />
                </svg>
            </div>}         
            <Row>
                <Col sm={3}>
                <img className="img-size" src ={item.image_url} alt={item.name} /> 
                </Col>
                <Col sm={9}>
                    <div className="item-name">{item.name}</div>
                    <div className="item-ellps">{itemDescription}</div>
                </Col>
            </Row>
        </Container>
    );
}
export default Card;