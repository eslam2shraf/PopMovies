import { useState } from "react";

const ContainerStyle={
  
display:'flex',
alignItems:'center',
gap:'16px'
};

const StarContainerStyle={
  
    display:'flex',
    flexDirection:"row"
   
    };
   

export default function StarRating({maxRateing =5,color='#fcc419', size,comments=["bad", "notGood","mid","good","a,azing"],defaultRateing=3 , OutSideState}){
    const [rateing,setRateing]=useState(defaultRateing)
    const [tempHover,setTempHover]=useState(0)
    const TextStyle={
        lineHeight:'1',
        margin:'0',
        color:color,
        fontSize: `${size/1.5}px`
          };


    function handelRateing(i){
     setRateing(i+1);
     OutSideState(i+1)

    }


    function Star({onClick , full, onHoverIn , onHoverOut, color='#fcc419', size }){

        const StarStyle={
            width:`${size}px`,
            height:`${size}px`,
            display:'block',
            curser:'pointer',
            color,
        }
       return(
<div role='button' style={StarStyle} onClick={onClick} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>

{full ?
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill={color}
  stroke={color}
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>
:
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke={color}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>
}
</div>








       )

    }
return(

<div style={ContainerStyle}>
<div style={StarContainerStyle}>
{Array.from({length:maxRateing},(_,i)=><Star onClick={()=>handelRateing(i)} comments={comments} full={tempHover?tempHover>=i+1: rateing>=i+1} onHoverIn={()=>setTempHover(i+1)} onHoverOut={()=>setTempHover(0)} size={size}/>)}
</div>

<p style={TextStyle}>{comments.length===maxRateing? comments[tempHover?tempHover-1 :rateing-1 ]:tempHover|| rateing||""}</p>
</div>


)



}

