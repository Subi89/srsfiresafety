import React, { Component } from 'react';
import Info from './info';

const footerStyle = {
    width: '100%',
    display: 'block',
    margin: 'auto',
    position: 'absolute'

}

class footer extends Component {
    render(){
      return(
      <div style={footerStyle}>
        <Info />
      </div>
       );
    }
}

export default footer;
