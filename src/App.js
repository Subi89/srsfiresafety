import React, { Component } from 'react';
import './App.css';

import SideMenuLeft from './components/sideMenuLeft';
import Carousel from './components/carousel';
import DisplayItemList from './components/displayItemList';
import Footer from './components/footer';
//import Info from './components/info';

const bodyStyle = {
    width: '100vw',
    minWidth: '1000px'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
        <div style={bodyStyle}>
            <SideMenuLeft />
            <DisplayItemList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;