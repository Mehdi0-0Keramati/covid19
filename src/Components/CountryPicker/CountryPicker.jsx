import { useState, useEffect } from "react";
import Styles from "./countryPicker.module.css"
import { fetchCountries } from "../../api/index"

const CountryPicker = ({ handleCountryChange }) => {
    const [Countries, setCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setCountries])
    return (
        <div>
            <form className={Styles.formcontrol}>
                <select defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">global</option>
                    {Countries?.map((country, idx) => <option key={idx} value={country}>{country}</option>)}
                </select>
            </form>
        </div>
    );
}

export default CountryPicker;