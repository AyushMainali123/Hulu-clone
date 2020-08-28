import React from 'react'
import './Nav.css'
import requests from './request'

const Nav = ({setSelectedOption}) => {
    return (
      <div className="Nav">
        <div onClick={() => setSelectedOption(requests.fetchTrending)}>
          Trending
        </div>
        <div onClick={() => setSelectedOption(requests.fetchTopRated)}>
          Top Rated
        </div>
        <div onClick={() => setSelectedOption(requests.fetchActionMovies)}>
          Action
        </div>
        <div onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
          Comedy
        </div>
        <div onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
          Horror
        </div>
        <div onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
          Romance
        </div>
        <div onClick={() => setSelectedOption(requests.fetchMystery)}>
          Mystery
        </div>
        <div onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</div>
        <div onClick={() => setSelectedOption(requests.fetchWestern)}>
          Western
        </div>
        <div onClick={() => setSelectedOption(requests.fetchAnimation)}>
          Animation
        </div>
        <div onClick={() => setSelectedOption(requests.fetchTV)}>
          Movie
        </div>
      </div>
    );
}

export default Nav
