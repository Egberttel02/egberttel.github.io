import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//cara import API yang telah dibuat di (api.js) atau yang telah diexport
//import {getMovieList, searchMovie} from "./api"
//import React, { useEffect, useState } from 'react';

function App() {

 // const [popularMovies, setPopularMovies] = useState([])

  //agar running pertamakali saat mau ambil data axios
//  useEffect (() => {
 //   getMovieList().then((result) => {
 //     setPopularMovies(result)
 //   })
//  }, [])

  //console.log({popularMovies: popularMovies})

 // const PopularMovieList = () =>{
   // return popularMovies.map((movie, i) => {
      //panggil keluar setPupular(result), title, poster, diambil dari console.log api
   //   return (
   //     <div className='movie-wrapper' key={i}>
   //       <div className='movie-title'>{movie.title}</div>
   //       <img className='movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
   ///       <div className='movie-date'>Release: {movie.release_date}</div>
  //        <div className='movie-rate'>{movie.vote_average}</div>
  //      </div>
 //     )
  //  })
//  }

  //const search = async (q) => {
    //if(q.length > 3){
    //  const query = await searchMovie(q)
 //     setPopularMovies(query.results)
   // }
 // }

  return (
   <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
