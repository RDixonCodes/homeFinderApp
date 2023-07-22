import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '951347c850msh377020f9286c71ep1e5175jsnbf379f78c707',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    }
);
    return data;
}