import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '99da4ce527mshe1945bd0b3988b6p1e4771jsn415f3484b434',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const fetchFromAPI = async (url) => {
const {data} = await axios.get(`${BASE_URL}/${url}`, options);
return data;
}