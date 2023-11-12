import React, { useCallback, useEffect, useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Map from './map';

class Banana extends React.Component{
    constructor() {
      super();
      this.state = {
          map:null
      };
    }
    
    render() {
      return (
        <div>
         <h3>Specialty Crops - Banana</h3>
         <Row>
          <Col>
          <Map heading ={ "Most bananas are grown in the south, mainly in Guandong,Guangxi, Yunnan, and Hainan"}
          lat={36.999805}
          long={-120.184954}
          // pos = {[[23.128410, 120.619957],
          // [23.644070, 108.266510]
        // [25.181129, 101.864143],
      // [19.566395,109.949684]]}
          />
          </Col>

          <Col>
          <Map heading= {"The major growing regions areLampung, East Java, and WestJava. Indonesian Papua in theeast"}
          lat={-5.42917}
          long={105.26111}
          // pos = {[[-5.42917, 105.26111],
          // [-7.250445, 112.768845]
        // [-6.914744,107.609810],
      // [-4.466667, 135.199997]]}
          />
          </Col>
         </Row>
        </div>
      );
    }
  }
  // const root = ReactDOM(document.getElementById('root'));
  // root.render(<Predict />);              
  export default Banana;
