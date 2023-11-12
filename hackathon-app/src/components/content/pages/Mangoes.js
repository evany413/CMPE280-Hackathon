import React, { useCallback, useEffect, useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Map from './map';

class Mangoes extends React.Component{
    constructor() {
      super();
      this.state = {
          map:null
      };
    }
    
    render() {
      return (
        <div>
         <h3>Specialty Crops - Mangoes</h3>
         <Row>
          <Col>
          <Map heading ={"Philippines, the largest production areas are Pangasinan in Luzon, West and Central Visas,Davao Region, and Cotabato Province forMindanao"}
          lat={14.599512}
          long={120.984222}
          // pos = {[[-5.42917, 105.26111],
          // [-7.250445, 112.768845]
        // [-6.914744,107.609810],
      // [-4.466667, 135.199997]]}
          />
          </Col>

          <Col>
          <Map heading= {"The major growing regions are Andhra Pradesh"}
          lat={15.693537}
          long={80.537659}
          // pos= {[[13.578337,79.428040],[18.184103, 83.097473]]}
          />
          </Col>
         </Row>
        </div>
      );
    }
  }
  // const root = ReactDOM(document.getElementById('root'));
  // root.render(<Predict />);              
  export default Mangoes;
