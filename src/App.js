import React, { Component } from "react";
import './App.css';
import ReactApexChart from "react-apexcharts";
import NomicsData from './components/NomicsData';


class App extends Component {
  constructor(props) {
    super(props);

        this.state = {
          options: {
            chart: {
              id: "basic-line"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        };
      }

      render() {
        return (
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  width="500"
                />
                <NomicsData />
              </div>
            </div>
          </div>
        );
      }
    }

export default App;
