//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
    ['From', 'To', 'Value'],
    ['Saudi Arabia', 'Australia', 30358],
    ['Saudi Arabia', 'Bangladesh', 1964],
    ['Saudi Arabia', 'Belgium', 1],
    ['Saudi Arabia', 'Brazil', 6834],
    ['Saudi Arabia', 'Bulgaria', 72],
    ['Saudi Arabia', 'Cambodia', 558],
    ['Saudi Arabia', 'Canada', 1],
    ['Saudi Arabia', 'China, mainland', 1852],
    ['Saudi Arabia', 'Egypt', 801],
    ['Saudi Arabia', 'France', 2],
    ['Saudi Arabia', 'Germany', 1],
    ['Saudi Arabia', 'Greece', 815],
    ['Saudi Arabia', 'India', 968660],
    ['Saudi Arabia', 'Indonesia', 13],
    ['Saudi Arabia', 'Iraq', 47],
    ['Saudi Arabia', 'Italy', 432],
    ['Saudi Arabia', 'Japan', 3],
    ['Saudi Arabia', 'Lebanon', 51],
    ['Saudi Arabia', 'Mongolia', 48],
    ['Saudi Arabia', 'Pakistan', 93272],    
    ['Saudi Arabia', 'Peru', 12],
    ['Saudi Arabia', 'Philippines', 23],
    ['Saudi Arabia', 'Portugal', 2554],
    ['Saudi Arabia', 'Republic of Korea', 2],
    ['Saudi Arabia', 'South Africa', 87],
    ['Saudi Arabia', 'Spain', 1402],
    ['Saudi Arabia', 'Sri Lanka', 162],
    ['Saudi Arabia', 'Thailand', 62574],
    ['Saudi Arabia', 'Turkey', 6],
    ['Saudi Arabia', 'United Arab Emirates', 96],
    ['Saudi Arabia', 'United Kingdom of Great Britain and Northern Ireland', 14],
    ['Saudi Arabia', 'United States of America', 90510],
    ['Saudi Arabia', 'Viet Nam', 20941],
  ]
  

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Egypt 2018 rice imports</h2>
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
            ['Australia', 30358],
            ['Bangladesh', 1964],
            ['Belgium', 1],
            ['Brazil', 6834],
            ['Bulgaria', 72],
            ['Cambodia', 558],
            ['Canada', 1],
            ['China, mainland', 1852],
            ['Egypt', 801],
            ['France', 2],
            ['Germany', 1],
            ['Greece', 815],
            ['India', 968660],
            ['Indonesia', 13],
            ['Iraq', 47],
            ['Italy', 432],
            ['Japan', 3],
            ['Lebanon', 51],
            ['Mongolia', 48],
            ['Pakistan', 93272],    
            ['Peru', 12],
            ['Philippines', 23],
            ['Portugal', 2554],
            ['Republic of Korea', 2],
            ['South Africa', 87],
            ['Spain', 1402],
            ['Sri Lanka', 162],
            ['Thailand', 62574],
            ['Turkey', 6],
            ['United Arab Emirates', 96],
            ['United Kingdom of Great Britain and Northern Ireland', 14],
            ['United States of America', 90510],
            ['Viet Nam', 20941]
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