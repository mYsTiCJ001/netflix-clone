import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import './Banner.css'

function Banner() {
  const [movies, setMovies] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results)
      })
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    )
  }

  const movie = movies[currentIndex]

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <div
      className='banner'
      style={{
        backgroundImage: movie?.backdrop_path
          ? `url(${imageUrl + movie.backdrop_path})`
          : 'none',
      }}
    >
    <button className='prevbutton' onClick={handlePrevious}>❮</button>
    <button className='nextbutton' onClick={handleNext}>❯</button>
      <div className='content'>
        <h1 className='title'>{movie?.title || movie?.name}</h1>
        <div className='bannerbuttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{truncate(movie?.overview, 300)}</h1>
      </div>
      <div className='fade'></div>
    </div>
  )
}

export default Banner
