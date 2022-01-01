import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
