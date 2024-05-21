import { useEffect, useState } from "react";
import Logo from "./Comp/Logo";
import Main from "./Comp/Main";
import MovieFound from "./Comp/MoviesFound";
import NavBar from "./Comp/Nav";
import Search from "./Comp/Search";
import SelectedMovie from "./Comp/SelectedMovie";
import MovieList from "./Comp/MovieList";
import Box from "./Comp/Box";
import WatchedMoviesList from "./Comp/WatchedMoviesList";
import WatchedSummary from "./Comp/WatchedSummary";
import { useMovie } from "./Comp/useMovies";
import { useLocalStorageState } from "./Comp/useLocalStorageState";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const KEY = "25987e41";

function ErrorMessage({ error }) {
  return (
    <p className="error">
      <span>🚫</span>
      {error}
    </p>
  );
}

function Loader() {
  return <p className="loader">Loading......</p>;
}

export default function App() {
  const [query, setQuery] = useState("");
const{movies,isLoading,error}=useMovie(query , handelCloseMovie)
  // const [watched, setWatched] = useState(function(){
 
  //   const storedValue=localStorage.getItem("watched")
  //   return JSON.parse(storedValue)

  // });
  const [watched, setWatched] =useLocalStorageState([],"watched")
  const [selectedId,setSelectedId]=useState(null)//"tt5814060"



function handelAddWatched(movie){

  setWatched(watched=>[...watched,movie])
  // localStorage.setItem("watched",JSON.stringify([...watched,movie]))
}

function handelSelectMovie(id){
setSelectedId((checkID)=>selectedId===id?null :id)

}
function handelDeleteMovie(id){
setWatched(watched=>watched.filter((movie)=>movie.imdbID !== id))

}
function handelCloseMovie(){
  setSelectedId(null)
  
  }

// useEffect(function(){
//   localStorage.setItem("watched",JSON.stringify(watched))


// },[watched])



  return (
    <>
      {/* <NavBar  movies={movies}/> */}
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />

        <MovieFound movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} handelSelectMovie={handelSelectMovie}  />}
          {error && <ErrorMessage error={error} />}
        </Box>
        <Box>
          {/* <WatchedBox
    movies={movies}
    tempMovieData={tempMovieData}
    tempWatchedData={tempWatchedData}
  /> */}
 
{ <>{selectedId ? <SelectedMovie KEY={KEY} selectedId={selectedId} handelAddWatched={handelAddWatched} handelCloseMovie={handelCloseMovie} watched={watched}/>: <>
<WatchedSummary watched={watched} />
<WatchedMoviesList watched={watched} handelDeleteMovie={handelDeleteMovie}/></>
}</> 
}

        </Box>
      </Main>
    </>
  );
}
