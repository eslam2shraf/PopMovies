

export default function MovieFound({movies}){

    return(
        <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    )
    
    }