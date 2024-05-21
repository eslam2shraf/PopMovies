import WatchedMovie from "./WatchedMovie";


export default function WatchedMoviesList({watched ,handelDeleteMovie}){
return(

    <ul className="list">
    {watched.map((movie) => (
     <WatchedMovie movie={movie} watched={watched} handelDeleteMovie={handelDeleteMovie}/>
    ))}
  </ul>
)


}