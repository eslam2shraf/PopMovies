import { useEffect, useState } from "react";
import StarRatind from "./StarRateing"
import { useKey } from "./useKey";

export default function SelectedMovie({ selectedId, handelCloseMovie, KEY , handelAddWatched ,watched}) {
  const [movieDetails, setMoviedetails] = useState({});
  const [movieLoading, setMovieLoading] = useState(false);
  const [allRedyWatched,setAllRedyWatched]=useState(true)
  const [userRating, setUserRating]=useState('')
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movieDetails;


  function handelAdd(){

    const newWatchedMovie={
      imdbID:selectedId,
      title,
      year,
      poster,
      runtime:Number(runtime.split(' ').at(0)),
      imdbRating:Number(imdbRating),
      userRating,
    }
    handelAddWatched(newWatchedMovie)
    handelCloseMovie()
  } 




const isWatched=watched.map((movie)=>movie.imdbID).includes(selectedId)
console.log(isWatched)
const watchedMovieRateing=watched.find((movie)=>movie.imdbID===selectedId)?.userRating

// function handelIsWatched(){
//   const allWatchedMovies = Object.values(watched);
//   allWatchedMovies.forEach((movie) => {
//       if(selectedId === movie.imdbID) {
//           console.log("Match found!");
//         setAllRedyWatched((s)=>false);
//         return;
//       }
//      else setAllRedyWatched(true)
//   });
// }
  



// console.log(allRedyWatched)



  useEffect(function () {
    async function getMovieDetails() {
      setMovieLoading(true)
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      // console.log(data);
      setMoviedetails(data);
      setMovieLoading(false)
    }

    getMovieDetails();

    // handelIsWatched();
  }, [selectedId]);

  useEffect(
    function(){
    if(!title)return;
document.title=`Movie|${title}`;
  
return function(){
document.title='PopCorn'

}

  },[title])
  console.log(watched)


//    useEffect(function(){
//    function callBack(e){
// if(e.code==='Escape'){
//   handelCloseMovie()}
//    }
//     document.addEventListener('keydown',callBack);
//  return function(){
// document.removeEventListener('keydown',callBack)

//  }
//    },[handelCloseMovie])


useKey('Escape',handelCloseMovie)

  return (
   

            <div className="details">
 { movieLoading ? 
            <p className="loader">Loading......</p>
            :
            <>
              <header >
              <button onClick={handelCloseMovie} className="btn-back">
            &larr;
              </button>
              <img src={poster} alt={`Poster of ${title}`} />
              <div className="details-overview">
              <h2>{title}</h2>
              <p>{released} &bull; {runtime}</p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB Rating
              </p>

              </div>
              </header>
              <section>
                <div className="rating">
                {/* <StarRatind maxRateing={10} size={24} defaultRateing={0} OutSideState={setUserRating} />

                { 
                allRedyWatched&&
                 userRating > 0 &&
                     <button className="btn-add" onClick={handelAdd}>+ Add to List</button>
                }
               */}
                        <div className="rating">
                  {!isWatched?(<>
                <StarRatind maxRateing={10} size={24} defaultRateing={0} OutSideState={setUserRating} />
                   
                   {
                    userRating > 0 &&
                        <button className="btn-add" onClick={handelAdd}>+ Add to List</button>
                   }
                
                </> ):
                <p>you Rated This movie before {watchedMovieRateing}</p>
                }
              
                </div>
        
                </div>
        
              <p><em>{plot}</em></p>
              <p>Starring {actors}</p>
              <p>Directed by {director}</p>
                  

              </section>
              </>}
            </div>


  );
}
