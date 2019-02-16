import React from 'react';
import axios from 'axios';

export default class NomicsData extends React.Component {
  state = {
    data: [{
      timestamp: [],
      low: [],
      open: [],
      close: [],
      high: [],
      volume: [],
    }
    ]

  }
  componentDidMount() {
    axios.get(`https://api.nomics.com/v1/candles?key=2018-09-demo-dont-deploy-b69315e440beb145&interval=1d&currency=BTC&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z`)
    .then(res => {
    const data = res.data;
    this.setState({ data });
  })
}

render() {
  return (
    <ul>
      { this.state.data.map(data => <li>{data.timestamp}{data.low}{data.open}{data.close}{data.high}{data.volume}</li>)}
    </ul>
  )
}
}
