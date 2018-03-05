import React, { Component } from 'react';
import './App.css';

import SideMenuLeft from './components/sideMenuLeft';
import SideMenuRight from './components/sideMenuRight';
import Carousel from './components/carousel';
import DisplayItemList from './components/displayItemList';
import Footer from './components/footer';
//import Info from './components/info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
        <SideMenuLeft />
        <DisplayItemList />
        <SideMenuRight />
        <Footer />
      </div>
    );
  }
}

export default App;