import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.country ="";
    this.year = "";
    this.commodity ="";
  }

  submit() {
    var page = "";
    if(this.country =="Egypt" && this.year == "2018" && this.commodity == "Rice"){
      page = "Import2018EgyptRice";
    } else if(this.country =="Egypt" && this.year == "2019" && this.commodity == "Rice"){
      page = "Import2019EgyptRice";
    } else if(this.country =="Egypt" && this.year == "2020" && this.commodity == "Rice"){
      page = "Import2020EgyptRice";
    } else if(this.country =="Egypt" && this.year == "2018" && this.commodity == "Wheat"){
      page = "Import2018EgyptWheat";
    } else if(this.country =="Egypt" && this.year == "2019" && this.commodity == "Wheat"){
      page = "Import2019EgyptWheat";
    } else if(this.country =="Egypt" && this.year == "2020" && this.commodity == "Wheat"){
      page = "Import2020EgyptWheat";
    } else if(this.country =="Saudi Arabia" && this.year == "2018" && this.commodity == "Rice"){
      page = "Import2018SARice";
    } else if(this.country =="Saudi Arabia" && this.year == "2019" && this.commodity == "Rice"){
      page = "Import2019SARice";
    } else if(this.country =="Saudi Arabia" && this.year == "2020" && this.commodity == "Rice"){
      page = "Import2020SARice";
    } else if(this.country =="Saudi Arabia" && this.year == "2018" && this.commodity == "Wheat"){
      page = "Import2018SAWheat";
    } else if(this.country =="Saudi Arabia" && this.year == "2019" && this.commodity == "Wheat"){
      page = "Import2019SAWheat";
    } else if(this.country =="Saudi Arabia" && this.year == "2020" && this.commodity == "Wheat"){
      page = "Import2020SAWheat";
    } 
    this.props.history.push(page);
     
  }

  render() {
    return (
      <div>
          <label for="country-choice">Select Country: </label>
          <input list="country-choices" id="country-choice" name="country-choice" 
          onChange={(event) => {
            this.country=event.target.value;
          }}/>
          <datalist id="country-choices">
              <option value="Egypt"/>
              <option value="Saudi Arabia"/>
          </datalist>
          <label for="year-choice">Select Year: </label>
          <input list="year-choices" id="year-choice" name="year-choice" 
          onChange={(event) => {
            this.year=event.target.value;
          }}/>
          <datalist id="year-choices">
              <option value="2018"/>
              <option value="2019"/>
              <option value="2020"/>
          </datalist>
          <label for="commodity-choice">Select Commodity: </label>
          <input list="commodity-choices" id="commodity-choice" name="commodity-choice" 
          onChange={(event) => {
            this.commodity=event.target.value;
          }}/>
          <datalist id="commodity-choices">
              <option value="Rice"/>
              <option value="Wheat"/>
          </datalist>
          <div><button onClick={this.submit}>Submit</button></div> 
        </div>
    )
  }
}
export default Home;