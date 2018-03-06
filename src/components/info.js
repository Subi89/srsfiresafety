import React, { Component } from 'react';

const infoStyle = {
    width: '100%',
    clear: 'both',
    textAlign: 'center'
}


class info extends Component {
    render(){
      return(
          <div style={infoStyle}>
              <p>SRS ENTERPRISES</p>
              <p>Kavundampalayam</p>
              <p>Coimbatore-30</p>
              <p>PH:9940799273:8695299273</p>
              <p>Mail: srsenterprisescbe@gmail.com</p>
              <a href="http://www.srsfiresafety.com">www.srsfiresafety.com</a>
           </div>
       );
    }
}

export default info;

