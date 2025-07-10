import React, { useEffect, useState } from 'react'
import './Rowbelow.css'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import YouTube from "react-youtube";
function Rowbelow(props) {
    const [urlId,seturlId] = useState('')
    const [movies, setMovies] = useState([])
    useEffect(() => {
     axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [props.url])
const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
const handleMovie = (id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
      seturlId(response.data.results[0])
    }
  })
}


  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj) => (
              <div className="poster-container" key={obj.id}>
                <img
                  onClick={() => handleMovie(obj.id)}
                  className={props.isSmall ? 'smallPoster' : 'poster'}
                  alt='poster'
                  src={`${imageUrl + obj.backdrop_path}`}
                />
                <div className="movie-title">{obj.title || obj.name}</div>
              </div>
            ))}
          </div>
          {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Rowbelow