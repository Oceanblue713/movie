import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {

  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: '$10',
      id: 2345
    }, 
    {
      name: "Micky",
      price: '$5',
      id: 432
    }
  ]);

  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id}/>
      ))}
    </div>

  )
}

export default MovieList;