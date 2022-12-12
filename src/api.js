//axios perlu download terlebih dahulu melalui cmd
import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

//memanggil data movie dari api
//async karena api dari luar
//export agar bisa dilempar keluar
export const getMovieList = async () => {
  //console.log(`${baseUrl}/movie/popular?api_key=${apiKey}`)
  
  //cara 1 untuk get data api (biasa banyak dipakai)
  //page = 1 agar tidak terkena rate limit dari api luar
  const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`); 
  
  //cara 2 untuk get data api (lebih gampang)
  //const movie = await axios.get(baseUrl + '/movie/popular?api_key=');
  
  //result dapat dari console log api
  return movie.data.results
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
  return search.data
};