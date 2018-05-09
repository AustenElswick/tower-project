import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'

const CustomMarker = ({ text }) => <div className="custom-marker"><p>{text}</p></div>;

class TacosAndMargsMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.752318,
      lng: -104.996735
    },
    zoom: 13
  };

  render() {
    return (
      <div style={{ height: '450px', width: '650px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBwW9s9Y_ts7bc-lEzor1gHoe682rHgAIs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <CustomMarker
            lat={39.751417}
            lng={-105.001589}
            text={'Margs Taco Bistro'}
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default TacosAndMargsMap;
