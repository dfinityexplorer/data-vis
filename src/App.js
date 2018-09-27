import React, { Component } from 'react';
import './App.css';
import MetricsGraphics from 'react-metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';
import Constants from './constants';

class App extends Component {
  render() {
    return (
        <MetricsGraphics
          chart_type={'line'}
          fonts={Constants.FONT_PRIMARY}
          // title="DFN"
        	description="This graphic will show something about DFN in the future. Using ETH data for now."
          data={
            [
              [{  "date":new Date('2014-11-01'),
                  "value":150000000 },

                { "date":new Date('2014-11-02'),
                  "value":168799730 }],

              [{  "date":new Date('2014-11-01'),
                  "value": 10000000 },

                { "date":new Date('2014-11-02'),
                  "value": 18799730 }]
            ]
                }
          width={500}
        	height={250}
        	x_accessor="date"
        	y_accessor="value"
          colors={[Constants.COLOR_CARD_GRAPH1, Constants.COLOR_CARD_GRAPH2]}
          area={false}
        />
    );
  }
}

export default App;
