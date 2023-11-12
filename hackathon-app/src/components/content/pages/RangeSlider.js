import React,  { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";


class MultiRangeSlider extends React.Component{

    constructor(props) {
        super(props);
        this.min = props.min;
        this.max = props.max;
        this.onChange = props.onChange;
        this.state = {
            minVal: props.min,
            maxVal: props.max,
        };
        this.minValRef = React.createRef();
        this.maxValRef = React.createRef();
        this.range = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.maxValRef.current) {
            if (prevState.minVal !== this.state.minVal) {
                const minPercent = this.getPercent(this.state.minVal);
                const maxPercent = this.getPercent(+this.maxValRef.current.value); // Preceding with '+' converts the value from type string to type number
        
                if (this.componentDidUpdaterange.current) {
                    this.range.current.style.left = `${minPercent}%`;
                    this.range.current.style.width = `${maxPercent - minPercent}%`;
                }
            }
        }
        if (this.minValRef.current) {
            if (prevState.maxVal !== this.state.maxVal) {
                const minPercent = this.getPercent(+this.minValRef.current.value);
                const maxPercent = this.getPercent(this.maxVal);
        
                if (this.range.current) {
                    this.range.current.style.width = `${maxPercent - minPercent}%`;
                }
            }
        }
        this.onChange({ min: this.state.minVal, max: this.state.maxVal });
    }

    getPercent(value) {
        return Math.round(((value - this.min) / (this.max - this.min)) * 100);
    }

    minChange(event) {
        const value = Math.min(+event.target.value, this.state.maxVal - 1);
        this.setState({ minVal: value });
        event.target.value = value.toString();
    }
    

    render() {
      return (
        <div className="container">
        <input
          type="range"
          min={this.min}
          max={this.max}
          value={this.state.minVal}
          ref={this.minValRef}
          onChange={(event) => {
                const value = Math.min(+event.target.value, this.state.maxVal - 1);
                this.setState({ minVal: value });
                event.target.value = value.toString();
            }
          }
          className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": this.state.minVal > this.max - 100
          })}
        />
        <input
          type="range"
          min={this.min}
          max={this.max}
          value={this.props.maxVal}
          ref={this.props.maxValRef}
          onChange={(event) => {
                const value = Math.max(+event.target.value, this.state.minVal + 1);
                this.setState({ maxVal: value });
                event.target.value = value.toString();
            }
          }
          className="thumb thumb--zindex-4"
        />
  
        <div className="slider">
          <div className="slider__track" />
          <div ref={this.range} className="slider__range" />
          <div className="slider__left-value">{this.state.minVal}</div>
          <div className="slider__right-value">{this.state.maxVal}</div>
        </div>
      </div> 
      );
    }
  }
  

export default MultiRangeSlider;