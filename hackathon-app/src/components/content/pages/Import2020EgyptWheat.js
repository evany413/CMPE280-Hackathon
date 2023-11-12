import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Egypt', 'Australia', 203640],
    ['Egypt', 'Bulgaria', 46593],
    ['Egypt', 'Canada', 8391],
    ['Egypt', 'France', 593422],
    ['Egypt', 'Hungary', 19171],
    ['Egypt', 'Italy', 0],
    ['Egypt', 'Lithuania', 23518],
    ['Egypt', 'Romania', 294522],
    ['Egypt', 'Russian Federation', 5460508],
    ['Egypt', 'Ukraine', 2317534],
    ['Egypt', 'United Kingdom of Great Britain and Northern Ireland', 2],
    ['Egypt', 'United States of America', 75282]
  ]
  
class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Egypt 2020 wheat imports</h2>
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
                        ['Australia', 203640],
                        ['Bulgaria', 46593],
                        ['Canada', 8391],
                        ['France', 593422],
                        ['Hungary', 19171],
                        ['Italy', 0],
                        ['Lithuania', 23518],
                        ['Romania', 294522],
                        ['Russian Federation', 5460508],
                        ['Ukraine', 2317534],
                        ['United Kingdom of Great Britain and Northern Ireland', 2],
                        ['United States of America', 75282]
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