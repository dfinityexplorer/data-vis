import React, { Component } from "react";
import './App.css';
import ReactApexChart from "react-apexcharts";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'line',
          width: '50%',
          shadow: {
            enabled: false,
            color: '#bbb',
            top: 3,
            left: 2,
            blur: 3,
            opacity: 1
          },
        },
        stroke: {
          width: 7,
          curve: 'smooth'
        },

        xaxis: {
          type: 'datetime',
          categories: ['2/10/2019', '2/11/2019', '2/12/2019', '2/13/2019', '2/14/2019', '2/15/2019', '2/16/2019', '2/17/2019', '2/18/2019', '2/19/2019'
          ],
        },
        title: {
          text: 'DFN',
          align: 'left',
          style: {
            fontSize: "16px",
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        markers: {
          size: 4,
          opacity: 0.9,
          colors: ["#FFA41B"],
          strokeColor: "#fff",
          strokeWidth: 2,

          hover: {
            size: 7,
          }
        },
        yaxis: {
          min: -10,
          max: 40,
          title: {
            text: 'Transactions',
          },
        }
      },
      series: [{
        name: 'Prices',
        data: [4, 3, 10, 9, 29, 19, 22, 8, 11, 5]
      }],
    }
  }

  // ComponentDidMount() {
  //       axios.get(
  //           "https://api.nomics.com/v1/prices?key=2018-08-demo-dont-deploy-6eb4ce24acd11f08"
  //         ).then((response) => {
  //             this.setState({prices: response.data})
  //           })
  //         }

  render() {


    return (


        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />
        </div>


    );
  }
}
export default App;
