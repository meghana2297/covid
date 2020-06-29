import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async (country) => {
    let baseUrl = url;

    if (country) {
        baseUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths } } = await axios.get(baseUrl);

        return { confirmed, recovered, deaths };
    } catch (error) {
        return error;
    }
};



export const getCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
};