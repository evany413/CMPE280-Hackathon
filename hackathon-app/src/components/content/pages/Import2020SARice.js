//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Saudi Arabia', 'Argentina', 519],
    ['Saudi Arabia', 'Australia', 4316],
    ['Saudi Arabia', 'Bangladesh', 3798],
    ['Saudi Arabia', 'Brazil', 9836],
    ['Saudi Arabia', 'Bulgaria', 1545],
    ['Saudi Arabia', 'Cambodia', 3302],
    ['Saudi Arabia', 'Canada', 2],
    ['Saudi Arabia', 'China, mainland', 2508],
    ['Saudi Arabia', 'China, Taiwan Province of', 7],
    ['Saudi Arabia', 'Egypt', 567],
    ['Saudi Arabia', 'France', 567],
    ['Saudi Arabia', 'Germany', 3],
    ['Saudi Arabia', 'India', 1199521],
    ['Saudi Arabia', 'Indonesia', 14],
    ['Saudi Arabia', 'Iraq', 56],
    ['Saudi Arabia', 'Italy', 2059],
    ['Saudi Arabia', 'Japan', 5],
    ['Saudi Arabia', 'Netherlands', 2],
    ['Saudi Arabia', 'Pakistan', 126799],    
    ['Saudi Arabia', 'Philippines', 63],
    ['Saudi Arabia', 'Portugal', 2401],
    ['Saudi Arabia', 'Republic of Korea', 7],
    ['Saudi Arabia', 'Romania', 21],
    ['Saudi Arabia', 'Russian Federation', 25],
    ['Saudi Arabia', 'Serbia', 40],
    ['Saudi Arabia', 'Spain', 906],
    ['Saudi Arabia', 'Sri Lanka', 113],
    ['Saudi Arabia', 'Thailand', 31377],
    ['Saudi Arabia', 'Ukraine', 0],
    ['Saudi Arabia', 'United Arab Emirates', 72],
    ['Saudi Arabia', 'United Kingdom of Great Britain and Northern Ireland', 6],
    ['Saudi Arabia', 'United States of America', 112894],
    ['Saudi Arabia', 'Uzbekistan', 83],
    ['Saudi Arabia', 'Viet Nam', 32292]
  ]

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Saudi Arabia 2020 rice imports</h2>
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
                    ['Argentina', 519],
                    ['Australia', 4316],
                    ['Bangladesh', 3798],
                    ['Brazil', 9836],
                    ['Bulgaria', 1545],
                    ['Cambodia', 3302],
                    ['Canada', 2],
                    ['China, mainland', 2508],
                    ['China, Taiwan Province of', 7],
                    ['Egypt', 567],
                    ['France', 567],
                    ['Germany', 3],
                    ['India', 1199521],
                    ['Indonesia', 14],
                    ['Iraq', 56],
                    ['Italy', 2059],
                    ['Japan', 5],
                    ['Netherlands', 2],
                    ['Pakistan', 126799],    
                    ['Philippines', 63],
                    ['Portugal', 2401],
                    ['Republic of Korea', 7],
                    ['Romania', 21],
                    ['Russian Federation', 25],
                    ['Serbia', 40],
                    ['Spain', 906],
                    ['Sri Lanka', 113],
                    ['Thailand', 31377],
                    
                    ['Ukraine', 0],
                    ['United Arab Emirates', 72],
                    ['United Kingdom of Great Britain and Northern Ireland', 6],
                    ['United States of America', 112894],
                    ['Uzbekistan', 83],
                    ['Viet Nam', 32292],
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