import React, { Component } from 'react';
import Logo from '../images/srsEnterprisesLogo.png';

const infoStyle = {
    width: '25vw',
    display: 'block',
    clear: 'both',
    textAlign: 'center',
    verticalAlign: 'top',
    right: '1vw',
    height: '100px',
    color: 'black',
    fontFamily: '"Lucida Console", Courier, monospace;'
}

const logoStyle = {
    width: '25vw',
    display: 'block',
    height: '80px',
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const imageStyle = {
    width: '100px',
    height: 'auto',
    verticalAlign: 'center',
    textAlign: 'center'
}

const linkStyle = {
    color: 'blue'
}


class info extends Component {
    render(){
      return(
        <div>
            <div style={logoStyle}></div>
            <div style={infoStyle}>
                <p>70A/1, K.K.NAGAR,</p>
                <p>Kavundampalayam</p>
                <p>Coimbatore - 641030</p>
                <p>Phone:  99407-99273  |   86952-99273</p>
                <p><a href="mailto:info@srsfiresafety.com">info@srsfiresafety.com</a></p>
                <a style={linkStyle} href="http://www.srsfiresafety.com">www.srsfiresafety.com</a>
            </div>
        </div>
       );
    }
}

export default info;

