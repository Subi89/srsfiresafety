import React, { Component } from 'react';
import './App.css';

import SideMenuLeft from './components/sideMenuLeft';
import Carousel from './components/carousel';
import DisplayItemList from './components/displayItemList';
import Footer from './components/footer';
import Header from './components/header';

const bodyStyle = {
    width: '100vw',
    minWidth: '1000px'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Alike|Halant|Squada+One" rel="stylesheet"/>
        <Header />
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