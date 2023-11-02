import React,{useEffect, useState} from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';

export default function GifListContainer() {
    const[gif, setGif] = useState([])
    const [search, setSearch] = useState("dolphins");
    

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=HcPUt7wqRy4neeZdxUayuDQXxJ8XIyIh&rating=g`)
        .then((res)=>res.json())
        .then(({data})=>{
           // console.log(data)
            const gifs = data.slice(0,3).map((gif) => ({ url: gif.images.original.url }));
           // console.log(gifs)
            setGif(gifs);
           // console.log("this is the",gif)
            
        })
    
    },[search])


  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
     <GifList  gifs={gif} />
      <GifSearch onSubmitSearch={setSearch} />
    </div>
  )
}