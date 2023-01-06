import React, { Component } from 'react'

import { Cards, ChartData, CountryPicker } from "./Components"
import styles from "./styles.module.css"
import { fetchdata } from "./api"

class App extends Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
    const datafetch = await fetchdata()
    this.setState({ data: datafetch })
  }

  handleCountryChange = async (country) => {
    const datafetch = await fetchdata(country)
    this.setState({ data: datafetch, country: country })
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img src={require("./assets/bg/covid.png")}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <ChartData data={data} country={country} />
      </div>
    );
  }
}

export default App;