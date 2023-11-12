import React,  { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";


class SingleSlider extends React.Component{

    constructor(props) {
        super(props);
        this.min = props.min;
        this.onChange = props.onChange;
        this.state = {
            minVal: props.min,
        };
        this.minValRef = React.createRef();
        this.range = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.minValRef.current) {
            if (prevState.maxVal !== this.state.maxVal) {
                const minPercent = this.getPercent(+this.minValRef.current.value);
        
                if (this.range.current) {
                    this.range.current.style.width = `${minPercent}%`;
                }
            }
        }
        this.onChange({ min: this.state.minVal});
    }

    getPercent(value) {
        return Math.round(((value - this.min) / (this.max - this.min)) * 100);
    }

    minChange(event) {
        event.preventDefault();
        const value = Math.min(+event.target.value);
        this.setState({ minVal: value });
        event.target.value = value.toString();
    }
    

    render() {
      return (
        <div className="container">
        <input
          type="range"
          min={this.min}
          value={this.state.minVal}
          ref={this.minValRef}
          onChange={(event) => {
                const value = Math.min(+event.target.value);
                this.setState({ minVal: value });
                event.target.value = value.toString();
            }
          }
          className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": this.state.minVal > this.max - 100
          })}
        />
        
  
        <div className="slider">
          <div className="slider__track" />
          <div ref={this.range} className="slider__range" />
          <div className="slider__left-value">{this.state.minVal}</div>
        </div>
      </div> 
      );
    }
  }

export default SingleSlider;