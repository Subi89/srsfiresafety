import React, { Component } from 'react';

const infoStyle = {
    width: '50%',
    display: 'inline-block',
    clear: 'both',
    textAlign: 'center',
    verticalAlign: 'top',
    right: '1vw',
    height: '150px'
}

const linkStyle = {
    color: 'white'
}


class info extends Component {
    render(){
      return(
          <div style={infoStyle}>
              <h2>SRS Enterprises</h2>
              <p>Kavundampalayam</p>
              <p>Coimbatore - 641030</p>
              <p>Phone:  99407-99273  :   86952-99273</p>
              <p>E-Mail: info@srsfiresafety.com</p>
              <a style={linkStyle} href="http://www.srsfiresafety.com">www.srsfiresafety.com</a>
           </div>
       );
    }
}

export default info;

