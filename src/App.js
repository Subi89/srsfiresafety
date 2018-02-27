import React, { Component } from 'react';
import './App.css';

import Sidemenu from './components/sidemenu';
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
                <Sidemenu />
                <DisplayItemList />
             </div>
        </div>
      </div>
    );
  }
}

export default App;