import axios from "axios";

// export const fetchDailyData = async () => {
//     try {
//         const { data } = await axios.get(`${url}/daily`)

//         const modifiedData = data.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             date: dailyData.reportDate,
//         }))

//         return modifiedData

//     } catch (error) {
//         console.log(error);
//     }
// }

// export const fetchCountries = async () => {
//     try {
//         const { data } = await axios.get('https://api.covid19api.com/countries');

//         return data.map((country) => country.Slug)
//     } catch (error) {
//         console.log(error);
//     }
// }