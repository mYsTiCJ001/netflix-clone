import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import { action, animation, comedy, crime, family, horror, mystery, nowplaying, originals, popular, romance, scifi, thriller, top_rated } from './urls'
import Banner from './Components/Banner/Banner'
import Rowbelow from './Components/Rowbelow/Rowbelow'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowbelow url ={originals} title ='Netflix Originals'/>
      <Rowbelow url ={nowplaying} title ='Now Playing' isSmall />
      <Rowbelow url ={popular} title ='Popular' isSmall />
      <Rowbelow url ={top_rated} title ='Top Rated' isSmall />
      <h2 className='title'>Categories :</h2>
      <Rowbelow url ={action} title ='Action' isSmall />
      <Rowbelow url ={thriller} title ='Thriller' isSmall />
      <Rowbelow url ={comedy} title ='Comedy' isSmall />
      <Rowbelow url ={horror} title ='Horror' isSmall />
      <Rowbelow url ={scifi} title ='Science Fiction' isSmall />
      <Rowbelow url ={romance} title ='Romance' isSmall />
      <Rowbelow url ={animation} title ='Animation' isSmall />
      <Rowbelow url ={crime} title ='Crime' isSmall />
      <Rowbelow url ={mystery} title ='Mystery' isSmall />
      <Rowbelow url ={family} title ='Family' isSmall />
    </div>
  )
}


export default App
