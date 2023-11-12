//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
  ['From', 'To', 'Value'],
  ['Egypt', 'Thailand', 8190],
  ['Egypt', 'Russian Federation', 315],
  ['Egypt', 'Pakistan', 284],
  ['Egypt', 'Italy', 138],
  ['Egypt', 'United States of America', 19],
  ['Egypt', 'Sri Lanka', 1],
  ['Egypt', 'United Kingdom of Great Britain and Northern Ireland', 1],
  ['Egypt', 'Saudi Arabia', 1],
  ['Egypt', 'Kuwait', 0],
  ['Egypt', 'United Arab Emirates', 0],
  ['Egypt', 'France', 0],
  ['Egypt', 'Nigeria', 0],
  ['Egypt', 'Oman', 0],
  ['Egypt', 'Qatar', 0],
  ['Egypt', 'South Africa', 0],
  ['Egypt', 'China', 32672],
  ['Egypt', 'India', 29165],
]

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Egypt 2018 rice imports</h2>
        <Chart
          width={750}
          height={'650px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={sankeyData}
          rootProps={{ 'data-testid': '1' }}
        /><div class = "col-2">
        </div>
        <div class = "col-5">
          <Chart
          chartType="PieChart"
          data={[['To', 'Value'],
          ['Thailand', 8190],
            ['Russian Federation', 315],
            ['Pakistan', 284],
            ['Italy', 138],
            ['United States of America', 19],
            ['Sri Lanka', 1],
            ['United Kingdom of Great Britain and Northern Ireland', 1],
            ['Saudi Arabia', 1],
            ['Kuwait', 0],
            ['United Arab Emirates', 0],
            ['France', 0],
            ['Nigeria', 0],
            ['Oman', 0],
            ['Qatar', 0],
            ['South Africa', 0],
            ['China', 32672],
            ['India', 29165],
              ]}
          graph_id="PieChart"
          width={"100%"}
          height={"120%"}
          legend_toggle
        />
      </div>
       
      </div>
      
    )
  }
}


  
  export default SankeyChart;