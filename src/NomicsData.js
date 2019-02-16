import React from "react";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prices: []
    }
  }

  componentDidMount() {
    require 'axios'
    .get("https://api.nomics.com/v1/prices?key=2018-09-demo-dont-deploy-b69315e440beb145"
    ).then((response) => {
      this.setState({prices: response.data})
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Cryptoasset Prices</h1>
        <p>
          This is a demo of the <a href="https://docs.nomics.com">Nomics Cryptoasset API</a>.
        </p>
        <table>
          <thead>
            <tr>
              <td>Symbol</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {this.state.prices.map((p) =>
              <tr key={p.currency}>
                <td>{p.currency}</td>
                <td>{p.price}</td>
              </tr>
            )}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default NomicsData
