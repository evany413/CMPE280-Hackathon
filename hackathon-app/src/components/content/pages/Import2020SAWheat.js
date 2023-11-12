//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Saudi Arabia', 'Brazil', 62460],
    ['Saudi Arabia', 'Latvia', 70100],
    ['Saudi Arabia', 'Lebanon', 2],
    ['Saudi Arabia', 'Lithuania', 130500],
    ['Saudi Arabia', 'Poland', 448613],
    ['Saudi Arabia', 'Russian Federation', 61700],
    ['Saudi Arabia', 'Yemen', 30],
  ]

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Saudi Arabia 2020 wheat imports</h2>
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
                ['Brazil', 62460],
                ['Latvia', 70100],
                ['Lebanon', 2],
                ['Lithuania', 130500],
                ['Poland', 448613],
                ['Russian Federation', 61700],
                ['Yemen', 30]
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