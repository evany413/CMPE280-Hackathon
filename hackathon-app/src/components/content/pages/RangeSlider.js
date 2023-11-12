import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";


const MultiRangeSlider = ({ min, max, onChange }) => {

  // Creating the state variables
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  // Creating the refs
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100), [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          console.log(event.target);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 100
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

// Set the type of each prop
MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;


// class MultiRangeSlider extends React.Component {

//   constructor(props) {
//     super(props);
//     this.min = props.min;
//     this.max = props.max;
//     this.onChange = props.onChange;
//     this.state = {
//       minVal: props.min,
//       maxVal: props.max,
//     };
//     this.minValRef = React.createRef();
//     this.maxValRef = React.createRef();
//     this.range = React.createRef();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.maxValRef.current) {
//       if (prevState.minVal !== this.state.minVal) {
//         const minPercent = this.getPercent(this.state.minVal);
//         const maxPercent = this.getPercent(+this.maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

//         if (this.componentDidUpdaterange.current) {
//           this.range.current.style.left = `${minPercent}%`;
//           this.range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//       }
//     }
//     if (this.minValRef.current) {
//       if (prevState.maxVal !== this.state.maxVal) {
//         const minPercent = this.getPercent(+this.minValRef.current.value);
//         const maxPercent = this.getPercent(this.maxVal);

//         if (this.range.current) {
//           this.range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//       }
//     }
//     this.onChange({ min: this.state.minVal, max: this.state.maxVal });
//   }

//   getPercent(value) {
//     return Math.round(((value - this.min) / (this.max - this.min)) * 100);
//   }

//   minChange(event) {
//     const value = Math.min(+event.target.value, this.state.maxVal - 1);
//     this.setState({ minVal: value });
//     event.target.value = value.toString();
//   }


//   render() {
//     return (
//       <div className="container">
//         <input
//           type="range"
//           min={this.min}
//           max={this.max}
//           value={this.state.minVal}
//           ref={this.minValRef}
//           onChange={(event) => {
//             const value = Math.min(+event.target.value, this.state.maxVal - 1);
//             this.setState({ minVal: value });
//             event.target.value = value.toString();
//           }
//           }
//           className={classnames("thumb thumb--zindex-3", {
//             "thumb--zindex-5": this.state.minVal > this.max - 100
//           })}
//         />
//         <input
//           type="range"
//           min={this.min}
//           max={this.max}
//           value={this.props.maxVal}
//           ref={this.props.maxValRef}
//           onChange={(event) => {
//             const value = Math.max(+event.target.value, this.state.minVal + 1);
//             this.setState({ maxVal: value });
//             event.target.value = value.toString();
//           }
//           }
//           className="thumb thumb--zindex-4"
//         />

//         <div className="slider">
//           <div className="slider__track" />
//           <div ref={this.range} className="slider__range" />
//           <div className="slider__left-value">{this.state.minVal}</div>
//           <div className="slider__right-value">{this.state.maxVal}</div>
//         </div>
//       </div>
//     );
//   }
// }


// export default MultiRangeSlider;