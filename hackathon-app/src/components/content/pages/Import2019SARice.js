//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Saudi Arabia', 'Afghanistan', 21],
    ['Saudi Arabia', 'Argentina', 100],
    ['Saudi Arabia', 'Australia', 16176],
    ['Saudi Arabia', 'Bangladesh', 2331],
    ['Saudi Arabia', 'Belgium', 21],
    ['Saudi Arabia', 'Brazil', 10918],
    ['Saudi Arabia', 'Bulgaria', 149],
    ['Saudi Arabia', 'Canada', 1],
    ['Saudi Arabia', 'China, mainland', 924],
    ['Saudi Arabia', 'Egypt', 1100],
    ['Saudi Arabia', 'Germany', 1],
    ['Saudi Arabia', 'India', 1045884],
    ['Saudi Arabia', 'Indonesia', 17],
    ['Saudi Arabia', 'Iraq', 50],
    ['Saudi Arabia', 'Italy', 800],
    ['Saudi Arabia', 'Japan', 1],
    ['Saudi Arabia', 'Malaysia', 2],
    ['Saudi Arabia', 'Pakistan', 134885],    
    ['Saudi Arabia', 'Philippines', 271],
    ['Saudi Arabia', 'Portugal', 1612],
    ['Saudi Arabia', 'Republic of Korea', 3],
    ['Saudi Arabia', 'Spain', 1453],
    ['Saudi Arabia', 'Sri Lanka', 67],
    ['Saudi Arabia', 'Thailand', 44520],
    ['Saudi Arabia', 'Turkey', 1],
    ['Saudi Arabia', 'Ukraine', 0],
    ['Saudi Arabia', 'United Arab Emirates', 6],
    ['Saudi Arabia', 'United Kingdom of Great Britain and Northern Ireland', 3],
    ['Saudi Arabia', 'United States of America', 103685],
    ['Saudi Arabia', 'Viet Nam', 27803],
  ]
  

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Saudi Arabia 2019 rice imports</h2>
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
                ['Afghanistan', 21],
                ['Argentina', 100],
                ['Australia', 16176],
                ['Bangladesh', 2331],
                ['Belgium', 21],
                ['Brazil', 10918],
                ['Bulgaria', 149],
                ['Canada', 1],
                ['China, mainland', 924],
                ['Egypt', 1100],
                ['Germany', 1],
                ['India', 1045884],
                ['Indonesia', 17],
                ['Iraq', 50],
                ['Italy', 800],
                ['Japan', 1],
                ['Malaysia', 2],
                ['Pakistan', 134885],    
                ['Philippines', 271],
                ['Portugal', 1612],
                ['Republic of Korea', 3],
                ['Spain', 1453],
                ['Sri Lanka', 67],
                ['Thailand', 44520],
                ['Turkey', 1],
                ['Ukraine', 0],
                ['United Arab Emirates', 6],
                ['United Kingdom of Great Britain and Northern Ireland', 3],
                ['United States of America', 103685],
                ['Viet Nam', 27803]
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