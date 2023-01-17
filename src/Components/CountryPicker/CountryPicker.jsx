import axios from "axios";
import { useState, useEffect } from "react";
import Styles from "./countryPicker.module.css"

const CountryPicker = ({ handleCountryChange }) => {
    const [Countries, setCountries] = useState([])
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const { data } = await axios.get('https://api.covid19api.com/countries');

                const countries = data.map((country) => country.Slug);
                setCountries(countries);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCountries()
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