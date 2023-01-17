import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto"
import { Bar, Line } from "react-chartjs-2";

import styles from "./chart.module.css";

const ChartData = ({ confirmed, recovered, deaths, country }) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const url = `https://api.covid19api.com/dayone/country/${country}`

        const fetchDailyData = async () => {
            if (country) {

                try {
                    const { data } = await axios.get(`${url}`)

                    const modifiedData = data.map((dailyData) => ({
                        confirmed: dailyData.Confirmed,
                        deaths: dailyData.Deaths,
                        date: dailyData.Date,
                    }))


                    setDailyData(modifiedData)

                } catch (error) {
                    console.log(error);
                }
            }

        }
        fetchDailyData()
    }, [country])

    const lineChart = (
        dailyData.length ?
            (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: "Infected",
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: "Deaths",
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,.5)',
                            fill: true,
                        }]
                    }}
                />
            ) : null
    )

    const barChart = (
        confirmed ?
            (
                <Bar
                    data={{
                        labels: ["Infected", "Recovered", "Deaths"],
                        datasets: [{
                            label: "People",
                            backgroundColor: [
                                'rgba(0,0,255,.5)',
                                'rgba(0,255,0,.5)',
                                'rgba(255,0,0,.5)',
                            ],
                            data: [confirmed, recovered, deaths]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` }
                    }}
                />
            )
            : null
    )
    return (
        <>
            <div className={styles.container}>
                {country ? lineChart : barChart}
            </div>
        </>
    );

}

export default ChartData;