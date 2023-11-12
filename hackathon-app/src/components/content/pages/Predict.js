import React, { useCallback, useEffect, useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Map from './map';

class Predict extends React.Component{
    constructor() {
      super();
      this.state = {
          map:null
      };
    }
    
    render() {
      return (
        <div>
         <h3>Specialty Crops - Walnuts</h3>
         <Row>
          <Col>
          <Map heading ={ "USA : major areas are San Joaquin and Sacramento Valleys"}
          lat={36.999805}
          long={-120.184954}
          //pos = {[[38.047537, -121.795492],[37.981425, -121.867658]]}
          />
          </Col>

          <Col>
          <Map heading= {"Kerman, Kermanshah, Hamedan, Lorestan, Kohgilouyeh-Boyerahmad , Khorasan Razavi,Bakhtiari, Eastern and Western Azerbaijan andMarkazi"}
          lat={32.525324}
          long={54.638571}
          //pos= {[[37.740648, 46.050397],[34.454938, 48.449910],[31.979177,50.708175],[34.867015, 46.936623]]}
          />
          </Col>
         </Row>
        </div>
      );
    }
  }             
  export default Predict;
