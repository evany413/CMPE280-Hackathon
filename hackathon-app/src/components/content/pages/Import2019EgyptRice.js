//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
  ['From', 'To', 'Value'],
  ['Egypt', 'China, mainland', 425186],
  ['Egypt', 'Pakistan', 4960],
  ['Egypt', 'Thailand', 1136], 
  ['Egypt', 'Viet Nam', 293],
  ['Egypt', 'Denmark', 0],
  ['Egypt', 'India', 61402],
  ['Egypt', 'United Kingdom of Great Britain and Northern Ireland', 0],
  ['Egypt', 'United States of America', 0],
  ['Egypt', 'Greece', 0],
  ['Egypt', 'Kuwait', 0],
  ['Egypt', 'Qatar', 0],   
  ['Egypt', 'Saudi Arabia', 0],
  ['Egypt', 'Spain', 4],
  ['Egypt', 'Italy', 32], 
  ['Egypt', 'Brunei Darussalam', 1],
  ['Egypt', 'Russian Federation', 2],
]

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Egypt 2019 rice imports</h2>
        <div class = "row">
          <div class = "col-5">
            <Chart
              width={550}
              height={'650px'}
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
                    ['Brunei Darussalam', 1],
                    ['China, mainland', 425186],
                    ['Denmark', 0],
                    ['Greece', 0],
                    ['India', 61402],
                    ['Italy', 32],
                    ['Kuwait', 0],
                    ['Pakistan', 4960],
                    ['Qatar', 0],
                    ['Russian Federation', 2],
                    ['Saudi Arabia', 0],
                    ['Spain', 4],
                    ['Thailand', 1136],
                    ['United Kingdom of Great Britain and Northern Ireland', 0],
                    ['United States of America', 0],
                    ['Viet Nam', 293]
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