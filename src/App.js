import React, { Component } from 'react';
import './App.css';

import SidemenuLeft from './components/sidemenuLeft';
import SidemenuRight from './components/sidemenuRight';
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
                <SidemenuLeft />
                <DisplayItemList />
                <SidemenuRight />
             </div>
        </div>
      </div>
    );
  }
}

export default App;