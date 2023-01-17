import { useEffect, useState } from 'react'

import { Cards, ChartData, CountryPicker } from "./Components"
import styles from "./styles.module.css"
// import { fetchdata } from "./api"
import axios from 'axios'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState("")
  const [confirmed, setConfirmed] = useState("")
  const [recovered, setRecovered] = useState("")
  const [deaths, setDeaths] = useState("")
  const [lastUpdate, setLastUpdate] = useState("")

  useEffect(() => {
    const url = "https://api.covid19api.com/summary";
    const fetchdata = async () => {
      try {
        const { data: { Global, Countries } } = await axios.get(url)
        setConfirmed(Global.TotalConfirmed)
        setRecovered(Global.TotalRecovered)
        setDeaths(Global.TotalDeaths)
        setLastUpdate(Global.Date)

        Countries.filter((item) => (
          item.Slug.includes(country) ? setConfirmed(item.TotalConfirmed) || setRecovered(item.TotalRecovered) || setDeaths(item.TotalDeaths) || setLastUpdate(item.Date) : ""
        ))

        return { confirmed, recovered, deaths, lastUpdate }

      } catch (error) {
        console.log(error);
      }
    }
    fetchdata()
  }, [country])

  const handleCountryChange = async (country) => {
    setCountry(country)
  }

  return (
    <div className={styles.container}>
      <img src={require("./assets/bg/covid.png")} />
      <Cards confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <ChartData country={country} confirmed={confirmed} recovered={recovered} deaths={deaths} />
    </div>
  )
}

export default App