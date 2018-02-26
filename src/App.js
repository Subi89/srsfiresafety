import React, { Component } from 'react';
import './App.css';

import Sidemenu from './components/sidemenu';
import Carousel from './components/carousel';


class App extends Component {
  render() {
    return (
      <div className="App">
	    <div className ="container">
             <div className="content">
                <Carousel />
                <Sidemenu />
                <div className="row">
                  <div className="column">
                    <div className="product-content">
                      <img src={require('./images/background.png')}  />
                      <p>ABC STORED PRESSURE TYPE FIRE 40 EXTINGUISHER</p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="product-content">
                      <img src={require('./images/background.png')} />
                       <p>ABC STORED PRESSURE TYPE FIRE 40 EXTINGUISHER</p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="product-content">
                      <img src={require('./images/background.png')}  />
                       <p>ABC STORED PRESSURE TYPE FIRE 40 EXTINGUISHER</p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="product-content">
                      <img src={require('./images/background.png')}  />
                       <p>ABC STORED PRESSURE TYPE FIRE 40 EXTINGUISHER</p>
                    </div>
                  </div>
                </div>
             </div>
        </div>
      </div>
    );
  }
}



           
       

export default App;