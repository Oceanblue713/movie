import React, {useState, createContext} from 'react';
import MovieList from './MovieList';

export const MovieContext = createContext();

export const MovieProvider = props => {

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
    <MovieContext.Provider value={'Hello'}>
      {props.children}
    </MovieContext.Provider>
  )
}