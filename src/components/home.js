//cara import API yang telah dibuat di (api.js) atau yang telah diexport
import {getMovieList, searchMovie} from "../api"
import React, { useEffect, useState } from 'react';

//npm install @mui/icons-material
//https://mui.com/material-ui/material-icons/?query=search&selected=Search
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])

    //agar running pertamakali saat mau ambil data axios
    useEffect (() => {
        getMovieList().then((result) => {
            setPopularMovies(result)
        })
    }, [])

    console.log({popularMovies: popularMovies})

    const PopularMovieList = () =>{
        return popularMovies.map((movie, i) => {
           //panggil keluar setPupular(result), title, poster, diambil dari console.log api
           return (
                <div className='movie-wrapper' key={i}>
                    <div className="poster">
                        <img className='movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
                    </div>
                    <div className="details">
                        <h3>{movie.title}</h3>
                        <div className="movie-details">
                            <p className='movie-date'>Release: {movie.release_date}</p>
                            <p className='movie-rate'>{movie.vote_average}</p>
                        </div>
                    </div>
                </div>
           )
        })
    }

     const search = async (q) => {
        if(q.length > 3){
            const query = await searchMovie(q)
            setPopularMovies(query.results)
        }
    }

    return(
        <div className="home">
            <div className="home-header">
                <h1>Movie Playlist</h1>

                <div className="search-wrapper">
                    <input 
                        placeholder='Find Your Preferred Film'  
                        className='movie-search'
                        onChange={({target}) => search(target.value)}
                    /> 
                    <div className="searchIcon">
                        <SearchIcon/>
                    </div>
                </div>
            </div>
            

            <div className='movie-container'>
                <PopularMovieList/>
            </div>
           
        </div>
    );
}

export default Home;