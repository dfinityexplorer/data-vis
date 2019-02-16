import React, { Component } from "react";
import './App.css';
import ReactApexChart from "react-apexcharts";
import NomicsData from './components/NomicsData';
import axios from 'axios';
import { readSync } from "fs";

/**
 * Top-level component of the app.
 */
class App extends Component {
  /**
   * Create an App object.
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      apexSeries: []
    };

    this.apexOptions = {
      chart: {
        type: 'line'
      },
      xaxis: {
        type: "datetime",
        labels: {
          /**
          * Custom formatter for xaxis labels.
          * @param { String } value The default value generated
          * @param { Number } timestamp In a datetime series, this is the raw timestamp 
          */
          formatter: (value, timestamp) => {
            return new Date(timestamp).toLocaleDateString();
          }
        }
      },
      yaxis: {
        labels: {
          /**
          * Custom formatter for yaxis labels.
          * @param { String } value The generated value of the y-axis tick
          * @param { index } index of the tick / currently executing iteration in yaxis labels array
          */
          formatter: (value, index) => {
            return '$' + value.toFixed(2);
          }
        }
      }
    };
  }

  /**
   * Invoked by React immediately after a component is mounted (inserted into the tree). 
   * @public
   */
  componentDidMount() {
    axios.get(`https://api.nomics.com/v1/candles?key=2018-09-demo-dont-deploy-b69315e440beb145&interval=1d&currency=BTC&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z`)
      .then(res => {
        const apexData = res.data.map((candle) => {
          return {x: candle.timestamp, y: candle.close};
        });
        const apexSeries = [{
            name: 'BTC Price',
            data: apexData
        }]
        this.setState({
          apexSeries: apexSeries
        });
    });
  }
  
  /**
   * Return a reference to a React element to render into the DOM.
   * @return {Object} A reference to a React element to render into the DOM.
   * @public
   */
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={this.apexOptions}
              series={this.state.apexSeries}
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
