//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
  ['From', 'To', 'Value'],
  ['Egypt', 'Australia', 0],
  ['Egypt', 'Bahrain', 0],
  ['Egypt', 'Cambodia', 4],
  ['Egypt', 'China, mainland', 16699],
  ['Egypt', 'France', 2],
  ['Egypt', 'India', 49898],
  ['Egypt', 'Italy', 127],
  ['Egypt', 'Kuwait', 0],
  ['Egypt', 'Netherlands', 9],
  ['Egypt', 'Pakistan', 553],
  ['Egypt', 'Republic of Korea', 0],
  ['Egypt', 'Russian Federation', 1],
  ['Egypt', 'Saudi Arabia', 0],
  ['Egypt', 'Thailand', 7620],
  ['Egypt', 'United Kingdom of Great Britain and Northern Ireland', 1],
  ['Egypt', 'United States of America', 22],
  ['Egypt', 'Viet Nam', 93]
]

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Egypt 2020 rice imports</h2>
        <div class = "row">
          <div class = "col-5">
            <Chart
              width={550}
              height={'450px'}
              chartType="Sankey"
              loader={<div>Loading Chart</div>}
              data={sankeyData}
            />
          </div>
          <div class = "col-2">
          </div>
          <div class = "col-5">
            <Chart
            chartType="PieChart"
            data={[['To', 'Value'],
                    ['Australia', 0],
                    ['Bahrain', 0],
                    ['Cambodia', 4],
                    ['China, mainland', 16699],
                    ['France', 2],
                    ['India', 49898],
                    ['Italy', 127],
                    ['Kuwait', 0],
                    ['Netherlands', 9],
                    ['Pakistan', 553],
                    ['Republic of Korea', 0],
                    ['Russian Federation', 1],
                    ['Saudi Arabia', 0],
                    ['Thailand', 7620],
                    ['United Kingdom of Great Britain and Northern Ireland', 1],
                    ['United States of America', 22],
                    ['Viet Nam', 93]
                ]}
            graph_id="PieChart"
            width={"100%"}
            height={"120%"}
            legend_toggle
          />
          </div>
        
        
      </div>
      </div>
     
    )
  }
}


  
  export default SankeyChart;