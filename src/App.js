import React, { Component } from 'react';
import './App.css';

import SideMenuLeft from './components/sideMenuLeft';
import SideMenuRight from './components/sideMenuRight';
import Carousel from './components/carousel';
import DisplayItemList from './components/displayItemList';
//import Info from './components/info';

class App extends Component {
  render() {
    return (
      <div className="App">
	    <div className ="container">
             <div>
                <Carousel />
                <SideMenuLeft />
                <DisplayItemList />
                <SideMenuRight />
             </div>
        </div>
      </div>
    );
  }
}

export default App;