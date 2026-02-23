import './Movies.css';
import { useState } from 'react';

export default function Movies(){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

     async function fetchMoviesHandler() {

        setIsLoading(true);
        try{
        const response = await fetch("https://swapi.dev/api/films/");

         if (!response.ok) {
        throw new Error("Something went wrong!");
        }


        const data = await response.json();

        const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
       setMovies(transformedMovies);
       setIsLoading(false);
    }catch (error) {
      setError(error.message);
    }
}
    return(
        <div className='container'>
            <h1 className='heading'>🎬 Star Wars Movies</h1>
            <button className='button' onClick={fetchMoviesHandler}>
                Fetch Movies
            </button>
            {isLoading && <p className='loading'>Loading...</p>}
              {error && <p className='error'>{error}</p>}
             {!isLoading && movies.length > 0 && (
            <ul className='list'>
          {movies.map((movie) => (
            <li key={movie.id} className='card'>
              <h2>{movie.title}</h2>
              <p><strong>Release Date:</strong> {movie.releaseDate}</p>
              <p>{movie.openingText}</p>
            </li>
          ))}
        </ul>)}
        </div>
    )
}