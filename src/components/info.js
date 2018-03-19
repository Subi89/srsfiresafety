import React, { Component } from 'react';
import Logo from './logo';

const infoStyle = {
    width: '25vw',
    minWidth: '500px',
    display: 'block',
    clear: 'both',
    textAlign: 'center',
    verticalAlign: 'top',
    right: '1vw',
    height: '100px',
    color: 'white',
    fontFamily: '"Lucida Console", Courier, monospace;'
}

const logoStyle = {
    verticalAlign: 'center',
    textAlign: 'center'
}

const linkStyle = {
    color: 'white'
}


class info extends Component {
    render(){
      return(
        <div>
            <div style={logoStyle}>
                <Logo />
            </div>
            <div style={infoStyle}>
                <p>70A/1, K.K.NAGAR,</p>
                <p>Kavundampalayam</p>
                <p>Coimbatore - 641030</p>
                <p>Phone:  99407-99273  |   86952-99273</p>
                <p><a style={linkStyle} href="mailto:info@srsfiresafety.com">info@srsfiresafety.com</a></p>
                <a style={linkStyle} href="http://www.srsfiresafety.com">www.srsfiresafety.com</a>
            </div>
        </div>
       );
    }
}

export default info;

