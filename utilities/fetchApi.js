import axios from "axios";

const apiLink = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '3031d49738mshdd7c3cc1edc5fe8p1f098fjsn0a5c805b2882',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchApi = async (url) => {
    const { data } = await axios.get(`${apiLink}/${url}`, options);

  return data;
  }