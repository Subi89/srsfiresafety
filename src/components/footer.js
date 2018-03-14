import React, { Component } from 'react';
import Info from './info';
import GoogleMap from './googleMap';

const footerStyle = {
    margin: '10px',
    padding: '20px',
    width: '100%',
    position: 'relative',
    height: '400px',
    background: '#E0E0EF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

class footer extends Component {
    render(){
      return(
      <div style={footerStyle}>
        <Info />
        <GoogleMap />
      </div>
       );
    }
}

export default footer;