import React, { Component } from 'react';
import Info from './info';
import GoogleMap from './googleMap';

const footerStyle = {
    margin: '10px',
    padding: '20px',
    width: '98%',
    display: 'inline-block',
    position: 'relative',
    borderRadius: '15px',
    height: '400px',
    background: '#222D32',
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