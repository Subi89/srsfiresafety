import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', display: 'inline-block', overflow:'visible', color: 'white', background: 'blue',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

const mapStyle = {
    width: '50%',
    height: '350px',
    display: 'inline-block',
    itemAlign: 'right',
};

class googleMap extends Component {
  static defaultProps = {
    center: {lat: 11.040455, lng: 76.9384},
    zoom: 13
  };

  render() {
    return (
    <div style={mapStyle}>
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
      >
      </GoogleMapReact>
      </div>
    );
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: {lat: 11.040455, lng: 76.9384},
      map,
      title: 'SRS Enterprises'
    });
  }
}

export default googleMap;