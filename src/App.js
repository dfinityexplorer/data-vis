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

// test data:
// [{"timestamp":"2018-04-14T00:00:00Z","low":"7871.64479","open":"7902.85009","close":"7996.88634","high":"8130.92248","volume":"644462964"},{"timestamp":"2018-04-15T00:00:00Z","low":"8151.82699","open":"8095.98353","close":"8359.66175","high":"8411.86518","volume":"762548617"},{"timestamp":"2018-04-16T00:00:00Z","low":"7920.31191","open":"8318.19670","close":"8044.53883","high":"8365.19621","volume":"861052094"},{"timestamp":"2018-04-17T00:00:00Z","low":"7845.69787","open":"8032.16824","close":"7895.10319","high":"8107.33905","volume":"695187100"},{"timestamp":"2018-04-18T00:00:00Z","low":"7948.87975","open":"7954.06903","close":"8167.67530","high":"8226.80600","volume":"707826690"},{"timestamp":"2018-04-19T00:00:00Z","low":"8243.43410","open":"8307.67442","close":"8284.84075","high":"8298.31736","volume":"760315685"},{"timestamp":"2018-04-20T00:00:00Z","low":"8406.78775","open":"8422.48529","close":"8887.28528","high":"8923.77377","volume":"1308940500"},{"timestamp":"2018-04-21T00:00:00Z","low":"8722.40544","open":"8842.04881","close":"8918.70376","high":"8996.07571","volume":"1011030731"},{"timestamp":"2018-04-22T00:00:00Z","low":"8895.82926","open":"8973.01898","close":"8801.71416","high":"8934.15092","volume":"810859506"},{"timestamp":"2018-04-23T00:00:00Z","low":"8869.19933","open":"8880.76428","close":"8966.64846","high":"8988.78124","volume":"700332587"},{"timestamp":"2018-04-24T00:00:00Z","low":"9094.76372","open":"9095.55925","close":"9673.71676","high":"9685.01643","volume":"1623764955"},{"timestamp":"2018-04-25T00:00:00Z","low":"8826.73464","open":"9488.50345","close":"8878.76309","high":"9574.34015","volume":"1970703843"},{"timestamp":"2018-04-26T00:00:00Z","low":"8816.74842","open":"8983.77675","close":"9270.11698","high":"9287.77020","volume":"1245564514"},{"timestamp":"2018-04-27T00:00:00Z","low":"8942.97668","open":"9212.14457","close":"8925.98227","high":"9250.55606","volume":"898259300"},{"timestamp":"2018-04-28T00:00:00Z","low":"8951.22000","open":"9016.73064","close":"9309.68494","high":"9422.27575","volume":"1020654434"},{"timestamp":"2018-04-29T00:00:00Z","low":"9251.06250","open":"9325.94116","close":"9383.09914","high":"9465.64238","volume":"781442863"},{"timestamp":"2018-04-30T00:00:00Z","low":"9150.77769","open":"9311.07883","close":"9239.79078","high":"9276.65341","volume":"738264186"},{"timestamp":"2018-05-01T00:00:00Z","low":"9000.43634","open":"9243.93441","close":"9076.96701","high":"9186.49065","volume":"835810808"},{"timestamp":"2018-05-02T00:00:00Z","low":"9073.98333","open":"9132.79310","close":"9234.89989","high":"9245.54886","volume":"660779701"},{"timestamp":"2018-05-03T00:00:00Z","low":"9559.34652","open":"9604.27308","close":"9731.53007","high":"9753.41748","volume":"1284079096"},{"timestamp":"2018-05-04T00:00:00Z","low":"9639.12538","open":"9761.28590","close":"9693.38067","high":"9675.03191","volume":"911465467"},{"timestamp":"2018-05-05T00:00:00Z","low":"9788.43163","open":"9803.32749","close":"9839.54898","high":"9926.66464","volume":"875140867"},{"timestamp":"2018-05-06T00:00:00Z","low":"9551.66844","open":"9754.26556","close":"9635.38145","high":"9769.57432","volume":"835551800"},{"timestamp":"2018-05-07T00:00:00Z","low":"9490.57719","open":"9456.86098","close":"9363.63597","high":"9451.57581","volume":"1027747765"},{"timestamp":"2018-05-08T00:00:00Z","low":"9153.84200","open":"9338.42315","close":"9166.54071","high":"9355.63860","volume":"802545239"},{"timestamp":"2018-05-09T00:00:00Z","low":"9168.18802","open":"9183.14652","close":"9310.72683","high":"9337.82803","volume":"771137885"},{"timestamp":"2018-05-10T00:00:00Z","low":"8978.90341","open":"9209.94185","close":"9005.15659","high":"9224.42724","volume":"706817623"},{"timestamp":"2018-05-11T00:00:00Z","low":"8383.73409","open":"8896.31605","close":"8394.52441","high":"8860.39416","volume":"1210657552"},{"timestamp":"2018-05-12T00:00:00Z","low":"8338.17406","open":"8416.52041","close":"8470.83282","high":"8676.43586","volume":"895851426"},{"timestamp":"2018-05-13T00:00:00Z","low":"8566.12046","open":"8638.13077","close":"8689.55770","high":"8710.32860","volume":"664803630"},{"timestamp":"2018-05-14T00:00:00Z","low":"8400.53676","open":"8688.06111","close":"8678.81464","high":"8841.14113","volume":"1017612093"}]

// [
//   {
//     "timestamp": "2018-04-14T00:00:00Z",
//     "low": "7810.00000000",
//     "open": "7877.48000000",
//     "close": "7999.01000000",
//     "high": "8186.00000000",
//     "volume": "31621.28635700",
//     "num_trades": "168756"
//   }
// ]
