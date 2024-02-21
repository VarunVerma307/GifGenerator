import React, { useEffect, useState } from 'react';
import useGif from "../hooks/useGif"
import axios from 'axios';
import Spinner from './Spinner';
const Random = () => {
    
    // const [loading,setloading]=useState(false);
    // const [gif,setgif]=useState('');
    // const url=`https://api.giphy.com/v1/gifs/random?api_key=6jTBE7JTeFqEh87WeudJGwCmSe5WDx9j`
    // async function fetchdata(){
    //     setloading(true);
    //     const {data}=await axios.get(url);
    //     console.log(data)
    //     const imgsrc=data.data.images.downsized_large.url;
    //     setgif(imgsrc);
    //     setloading(false);
    // }
    // useEffect(()=>{
    //     fetchdata();
    // },[])
    const {gif,loading,fetchdata}=useGif();
   function clickHandler(){
    fetchdata();
   }
  return (
    <div>
      <h2>RANDOM GIF</h2>
      {loading? (<Spinner/>): (<img src={gif}  width={200} height={200}/>)}
      <button onClick={clickHandler}>Generate</button>
    </div>  
  )
}

export default Random
