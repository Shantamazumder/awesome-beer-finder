import React, { Component } from 'react';
import './styles.scss';
import { Content } from './components/Content';
import { SearchBar } from './components/SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
        data: null
      }
  }
 
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Content/>
      </div>
    );
  }
}

export default Home;
