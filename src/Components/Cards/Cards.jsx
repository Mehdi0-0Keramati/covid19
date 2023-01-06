import CountUp from "react-countup";
import Styles from "./cards.module.css"
import cx from "classnames"

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading..."
    }
    return (
        <>
            <div className={Styles.container}>
                <div className={cx(Styles.item, Styles.intected)}>
                    <p className={Styles.title}>Intected</p>
                    <b>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                    </b>
                    <p className={Styles.lastUpdate}>{new Date(lastUpdate).toDateString()}</p>
                    <p>number of active cases of COVID-19</p>
                </div>

                <div className={cx(Styles.item, Styles.recovered)}>
                    <p className={Styles.title}>Recovered</p>
                    <b>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                    </b>
                    <p className={Styles.lastUpdate}>{new Date(lastUpdate).toDateString()}</p>
                    <p>number of active cases of COVID-19</p>
                </div>

                <div className={cx(Styles.item, Styles.deaths)}>
                    <p className={Styles.title}>Deaths</p>
                    <b>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                    </b>
                    <p className={Styles.lastUpdate}>{new Date(lastUpdate).toDateString()}</p>
                    <p>number of active cases of COVID-19</p>
                </div>
            </div>
        </>
    );
}

export default Cards;