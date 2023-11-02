import React from 'react'

export default function GifList({gifs}) {
//console.log(gifs)
        return (
          <ul className='gif-container'>
            {gifs.map((gif) => (
              <li className='gif-li' key={gif.url}>
                <img className='gif-img' src={gif.url} alt="loading" />
              </li>
            ))}
        </ul>
          
        )
      }
