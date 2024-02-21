import React from 'react'

const usegif = () => {
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
}

export default usegif
