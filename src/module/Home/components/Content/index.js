import React, { Component } from 'react';
import './styles.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Card  from '../../../components/Card';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
          favItem: JSON.parse(localStorage.getItem('favItems')) || [],
          error: null,
          items: []
        };
      }

    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                items: result
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
      }

      favItemClicked = (e) => {
        if (this.state.favItem.indexOf(e) === -1) {
          this.setState(prevState => ({
            favItem: [...prevState.favItem, e]
          }), ()=>{
            localStorage.setItem('favItems', JSON.stringify(this.state.favItem));
          })
        } else {
          this.setState(({
            favItem: this.state.favItem.filter((fi, i) => i !== this.state.favItem.indexOf(e))
          }), ()=>{
            localStorage.setItem('favItems', JSON.stringify(this.state.favItem));
          });
        }
      }

    render() {
     return <div>
         <Container>
             <Row style={{paddingTop: '2rem'}}>
                 {this.state.items.map((i) => {
                    return <Col key={i.name} index={i} sm={4}>
                      <Card item={i} favItemClicked={this.favItemClicked}
                       deletedItem={this.deletedItem} favItemList ={this.state.favItem}/>
                     </Col>
                 })
                }               
             </Row>
         </Container>
     </div>
    }
}