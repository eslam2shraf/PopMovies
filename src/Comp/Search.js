import { useEffect, useRef } from "react";
import { useKey } from "./useKey";

export default function Search({ query, setQuery }) {
  const inputel=useRef(null)
 useKey("enter",function(){
      
  if (document.activeElement===inputel.current)return;
        inputel.current.focus(); 
       setQuery("")
      

 })
//   useEffect(function(){
    

//     function callback(e){
// // console.log(inputel.current + "im here")

// 
//       if(e.code==="Enter"){
  // if (document.activeElement===inputel.current)return;
//         inputel.current.focus(); 
//        setQuery("")
//       }
//     }
  
//      document.addEventListener("keydown",callback);
//      return ()=> document.addEventListener("keydown",callback);

//   },[setQuery])
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputel}
    />
  );
}
