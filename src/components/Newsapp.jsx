import React from 'react'
import Card from './Card'

const Newsapp = () => {
  return (
    <div>
      <nav>
        <div className="trend_news">Trend News</div>
        <ul>
            <a href="#">All News</a>
            <a href="#">Trending</a>
        </ul>
        <div className="searchBar">
            <input type="text" placeholder='Search News'/>
            <button>Search</button>
        </div>
      </nav>
      <div className="">
        <p>Stay Update with Trend News</p>
      </div>
      <div className="categoryBtn">
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>

      <div className="">
        <Card/>
      </div>
    </div>
  )
}

export default Newsapp
