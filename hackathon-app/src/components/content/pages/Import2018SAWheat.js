//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Saudi Arabia', 'France', 191477],
    ['Saudi Arabia', 'Germany', 257434],
    ['Saudi Arabia', 'Italy', 6],
    ['Saudi Arabia', 'Latvia', 129703],
    ['Saudi Arabia', 'Lithuania', 260521],
    ['Saudi Arabia', 'Poland', 64090],
    ['Saudi Arabia', 'United States of America', 84],
    ['Saudi Arabia', 'Yemen', 304],
  ]

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Saudi Arabia 2018 wheat imports</h2>
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
                    ['France', 191477],
                    ['Germany', 257434],
                    ['Italy', 6],
                    ['Latvia', 129703],
                    ['Lithuania', 260521],
                    ['Poland', 64090],
                    ['United States of America', 84],
                    ['Yemen', 304]
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