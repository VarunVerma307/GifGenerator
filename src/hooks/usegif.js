import React from "react";
import { useEffect,useState } from "react";

import axios from 'axios';

const useGif = (tag) => {
    const url1 = `https://api.giphy.com/v1/gifs/random?api_key=6jTBE7JTeFqEh87WeudJGwCmSe5WDx9j&tag=${tag}`;
const url2 = `https://api.giphy.com/v1/gifs/random?api_key=6jTBE7JTeFqEh87WeudJGwCmSe5WDx9j`;
  const [loading, setloading] = useState(false);
  const [gif, setgif] = useState("");
  async function fetchdata() {
    setloading(true);
    const { data } = await axios.get(tag ? url1 : url2);
    console.log(data);
    const imgsrc = data.data.images.downsized_large.url;
    setgif(imgsrc);
    setloading(false);
  }
  useEffect(() => {
    fetchdata(tag);
  }, []);
  return { gif, loading, fetchdata };
};

export default useGif;