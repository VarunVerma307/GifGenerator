import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
const Tag = () => {
    const [tag,settag]=useState('car');
    const [loading,setloading]=useState(false);
    const [gif,setgif]=useState('');

    const url=`https://api.giphy.com/v1/gifs/random?api_key=6jTBE7JTeFqEh87WeudJGwCmSe5WDx9j&tag=${tag}`
    async function fetchdata(){
        setloading(true);
        const {data}=await axios.get(url);
        console.log(data)
        const imgsrc=data.data.images.downsized_large.url;
        setgif(imgsrc);
        setloading(false);
    }
    useEffect(()=>{
        fetchdata();
    },[])
    function changeHandler(event){
        settag(event.target.value);
    }
    function clickHandler(){
        fetchdata();
       }
  return (
    <div>
 
      <h2>TAG {tag} GIF</h2>
      {loading? (<Spinner/>): (<img src={gif} width={200} height={200}/>)}
      <input type='text' onChange={changeHandler} value={tag}/>
      <button onClick={clickHandler}>Generate</button>

    </div>
  )
}

export default Tag
