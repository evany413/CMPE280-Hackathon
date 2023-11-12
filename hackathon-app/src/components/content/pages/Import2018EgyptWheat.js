import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Egypt', 'Australia', 264309],
    ['Egypt', 'Belarus', 67604],
    ['Egypt', 'Bulgaria', 57741],
    ['Egypt', 'Canada', 34901],
    ['Egypt', 'France', 67],
    ['Egypt', 'Lithuania', 38029],
    ['Egypt', 'Poland', 138721],
    ['Egypt', 'Romania', 1104706],
    ['Egypt', 'Russian Federation', 9198030],
    ['Egypt', 'Ukraine', 1600458],
  ]
class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Egypt 2018 wheat imports</h2>
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
                        ['Australia', 264309],
                        ['Belarus', 67604],
                        ['Bulgaria', 57741],
                        ['Canada', 34901],
                        ['France', 67],
                        ['Lithuania', 38029],
                        ['Poland', 138721],
                        ['Romania', 1104706],
                        ['Russian Federation', 9198030],
                        ['Ukraine', 1600458],
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