import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends React.Component {
  
   render() {
    const {long,lat} = this.props
   const GoogleMapExample = withGoogleMap(props => (

      <GoogleMap
        defaultCenter = { { lat: lat, lng: long } }
        defaultZoom = { 7 }
      >
      </GoogleMap>
   ));
   return(

      <div>
        <h3>{this.props.heading}</h3>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;