import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Egypt', 'Australia', 32724],
    ['Egypt', 'Belarus', 57750],
    ['Egypt', 'Brazil', 14],
    ['Egypt', 'Bulgaria', 14],
    ['Egypt', 'Canada', 64],
    ['Egypt', 'France', 625830],
    ['Egypt', 'Netherlands', 1],
    ['Egypt', 'Poland', 128333],
    ['Egypt', 'Republic of Moldova', 9],
    ['Egypt', 'Romania', 1286086],
    ['Egypt', 'Russian Federation', 5743949],
    ['Egypt', 'Ukraine', 1767563],
    ['Egypt', 'United States of America', 782095]
  ]
  
class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Egypt 2019 wheat imports</h2>
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
                    ['Australia', 32724],
                    ['Belarus', 57750],
                    ['Brazil', 14],
                    ['Bulgaria', 14],
                    ['Canada', 64],
                    ['France', 625830],
                    ['Netherlands', 1],
                    ['Poland', 128333],
                    ['Republic of Moldova', 9],
                    ['Romania', 1286086],
                    ['Russian Federation', 5743949],
                    ['Ukraine', 1767563],
                    ['United States of America', 782095]
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