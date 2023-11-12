//import React from "react";
import React, { Component } from 'react'
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Saudi Arabia', 'France', 11],
    ['Saudi Arabia', 'Germany', 139850],
    ['Saudi Arabia', 'Italy', 37],
    ['Saudi Arabia', 'Lithuania', 259583],
    ['Saudi Arabia', 'Poland', 66149],
    ['Saudi Arabia', 'Russian Federation', 50],
    ['Saudi Arabia', 'Yemen', 92],
  ]

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Saudi Arabia 2019 wheat imports</h2>
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
                    ['France', 11],
                    ['Germany', 139850],
                    ['Italy', 37],
                    ['Lithuania', 259583],
                    ['Poland', 66149],
                    ['Russian Federation', 50],
                    ['Yemen', 92]
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